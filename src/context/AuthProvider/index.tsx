import { createContext, useEffect, useState } from "react"
import { IAuthProvider, IContext, IUser } from "./types"
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util"

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage()

    if (user) {
      setUser(user)
    }
  }, [])

  async function authenticated(email: string, password: string) {
    const response = await LoginRequest(email, password)

    const payload = { token: response.token, email }

    setUser(payload)
    setUserLocalStorage(payload)
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }
  return <AuthContext.Provider value={{ ...user, authenticated, logout }}>{children}</AuthContext.Provider>
}
