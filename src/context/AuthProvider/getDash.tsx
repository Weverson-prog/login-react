import { Root } from "./types"
import { getUserLocalStorage } from "./util"

export async function getCard() {
  const token = JSON.stringify(getUserLocalStorage().token)
  const response = await fetch(
    "http://conciliador.sandbox.pratico.tech/dashboard/card?start_date=2022-10-01&final_date=2022-10-31",
    {
      method: "get",
      headers: {
        token: token,
        "Content-Type": "application/json"
      }
    }
  )
  if (!response.ok) {
    return null
  }

  const dados: Root = await response.json()

  return dados
}
