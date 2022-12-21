import { getUserTokenInfo } from "@services/api"
import { schemaUserTokenInfo, UserTokenInfo } from "@services/schemas/apiResponses"
import { useMutation } from "@tanstack/react-query"
import { createContext, useContext, useState } from "react"
import { IAuthContext, IAuthProvider, UserTokenMutationProps } from "./types"

const userLocalStorageKey = "user"
const tokenExpireTime = 1 * 59 * 1000

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState(getLocalStorageUser())

  function getLocalStorageUser() {
    const localUserTokenInfo = localStorage.getItem(userLocalStorageKey) as string | null
    if (localUserTokenInfo === null || localUserTokenInfo.length < 10) return null
    return schemaUserTokenInfo.parse(JSON.parse(localUserTokenInfo))
  }

  function setUserLocalStorage(userTokenInfo: UserTokenInfo) {
    localStorage.setItem(userLocalStorageKey, JSON.stringify(userTokenInfo))
  }

  const userMutation = useMutation({
    mutationKey: ["userTokenInfo"],
    mutationFn: ({ email, password }: UserTokenMutationProps) => getUserTokenInfo(email, password),
    onSuccess: userTokenInfo => {
      setUser(userTokenInfo)
      setUserLocalStorage(userTokenInfo)
      console.log("User logged in")
    },
    cacheTime: tokenExpireTime
  })

  function logIn({ email, password }: UserTokenMutationProps) {
    userMutation.mutate({ email, password })
  }

  function logOut() {
    localStorage.clear()
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, logIn, logOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}
