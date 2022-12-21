import { getUserTokenInfo } from "@services/api"
import { schemaUserTokenInfo, UserTokenInfo } from "@services/schemas/apiResponses"
import { useMutation } from "@tanstack/react-query"
import { createContext, useContext, useState } from "react"
import { IAuthContext, IAuthProvider } from "./types"

const userLocalStorageKey = "user"
const tokenExpireTime = 1 * 59 * 1000

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<UserTokenInfo | null>(null)

  const userMutation = useMutation(
    ({ email, password }: { email: string; password: string }) => getUserTokenInfo(email, password),
    {
      onSuccess: data => {
        setUser(data)
        setUserLocalStorage(data)
        console.log("User logged in")
      },
      cacheTime: 1
    }
  )

  function logIn(email: string, password: string) {
    userMutation.mutate({ email, password })
  }

  function logOut() {
    setUser({} as UserTokenInfo)
    setUserLocalStorage({} as UserTokenInfo)
  }
  return <AuthContext.Provider value={{ user, userMutation, logIn, logOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export function setUserLocalStorage(user: UserTokenInfo) {
  localStorage.setItem(userLocalStorageKey, JSON.stringify(user))
}

export function getUserLocalStorage() {
  const userLoginInfo = localStorage.getItem(userLocalStorageKey)

  if (userLoginInfo === null) throw new Error("User not found")

  const validatedLocalUser = schemaUserTokenInfo.parse(JSON.parse(userLoginInfo))
  return validatedLocalUser
}
