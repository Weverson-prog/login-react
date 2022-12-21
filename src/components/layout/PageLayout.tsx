import "@assets/css/scrollbar.css"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import { PageFooter } from "./PageFooter"
import { PageHeader } from "./PageHeader"
import { SideMenu } from "./SideMenu"

export function PageLayout() {
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
