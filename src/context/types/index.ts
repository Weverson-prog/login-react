import { UserTokenInfo } from "@services/schemas/apiResponses"
import { UseMutationResult } from "@tanstack/react-query"

export type userLogin = {
  email: string
  password: string
}

export interface IAuthContext {
  user: UserTokenInfo | null
  userMutation: UseMutationResult<UserTokenInfo, unknown, userLogin, unknown>
  logIn: (email: string, password: string) => void
  logOut: () => void
}

export interface IAuthProvider {
  children?: JSX.Element
}
