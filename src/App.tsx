import { AuthProvider } from "@context/AuthProvider"
import { Loading, PageLayout } from "@layout/index"
import { Login } from "@pages/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RoutesList } from "./RoutesList"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <PageLayout />,
    children: RoutesList
  }
])

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </AuthProvider>
  )
}
