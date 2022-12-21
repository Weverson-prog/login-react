import { UserTokenInfo } from "@services/schemas/apiResponses"

export type UserTokenMutationProps = { email: string; password: string }

export interface IAuthContext {
  logIn: ({ email, password }: UserTokenMutationProps) => void
  logOut: () => void
  user: UserTokenInfo | null
}

export interface IAuthProvider {
  children?: React.ReactNode
}
