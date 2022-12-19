import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
