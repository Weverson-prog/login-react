import { Layout } from "antd"
import { Navigate, Outlet } from "react-router-dom"
import { PageFooter } from "./PageFooter"
import { PageHeader } from "./PageHeader"
import { SideMenu } from "./SideMenu"
import "@assets/css/scrollbar.css"
import { useAuth } from "@context/AuthProvider"

export function PageLayout() {
  const auth = useAuth()
  if (!auth.user) return <Navigate to="/login" />

  return (
    <>
      <Layout style={{ minHeight: "100vh" }} hasSider>
        <SideMenu />
        <Layout className="site-layout">
          <PageHeader />
          <Outlet />
          <PageFooter />
        </Layout>
      </Layout>
    </>
  )
}
