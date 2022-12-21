import axios from "axios"
import { schemaDashboardInfo, schemaUserTokenInfo } from "../schemas/apiResponses"

export const apiClient = axios.create({ baseURL: "http://conciliador.sandbox.pratico.tech" })

export async function getUserTokenInfo(email: string, password: string) {
  const auth = { username: email, password: password }
  const userData = { email, password }
  const { data } = await apiClient.post("/auth", userData, { auth })
  const validatedData = schemaUserTokenInfo.parse(data)
  return validatedData
}
export async function getDashboardInfo(token: string, start_date = "2022-10-01", final_date = "2022-10-31") {
  const headers = { token, "Content-Type": "application/json" }
  const params = { start_date, final_date }
  const { data } = await apiClient.get(`dashboard/card`, { headers, params })
  const validatedData = schemaDashboardInfo.parse(data)
  return validatedData
}
