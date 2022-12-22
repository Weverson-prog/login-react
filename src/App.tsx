import { AuthVerifier } from "@components/layout/AuthVerifier"
import { AuthProvider } from "@context/AuthProvider"
import { PageLayout } from "@layout/index"
import { Login } from "@pages/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RoutesList } from "./RoutesList"
// import "./App.css"

const router = createBrowserRouter([
  {
    element: <AuthVerifier />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        element: <PageLayout />,
        children: RoutesList
      }
    ]
  }
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
