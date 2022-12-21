import { z } from "zod"

export const schemaUserTokenInfo = z.object({
  token: z.string(),
  name_holding: z.string(),
  message: z.string(),
  expires_in: z.string(),
  type: z.string()
})

export type UserTokenInfo = z.infer<typeof schemaUserTokenInfo>

export { schemaDashboardInfo } from "./dashboard"
