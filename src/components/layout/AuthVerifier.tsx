import { useAuth } from "@context/AuthProvider"
import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export function AuthVerifier() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!user && pathname !== "/login") {
      navigate("/login")
    }
    if (user && pathname === "/login") {
      navigate("/")
    }
  }, [pathname, user, navigate])

  return <Outlet />
}
