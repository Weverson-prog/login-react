import { api } from "../../services/api"
import { IUser } from "./types"

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("u", JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u")

  if (!json) {
    return null
  }
  const user = JSON.parse(json)

  return user ?? null
}

export async function LoginRequest(email: string, password: string) {
  try {
    const { data } = await api.post(
      "auth",
      { email, password },
      {
        auth: {
          username: email,
          password: password
        }
      }
    )

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
