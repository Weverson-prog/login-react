import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Loading, PageLayout } from "./components/layout"
import { Login } from "./components/pages"
import { AuthProvider } from "./context/AuthProvider"
import { RoutesList } from "./RoutesList"

const router = createBrowserRouter([
  {
    path: "login",
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
