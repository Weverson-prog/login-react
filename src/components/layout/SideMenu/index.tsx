import logo from "@assets/img/praticoLogo.png"
import { Layout, Menu } from "antd"
import { useState } from "react"
import { MenuItems } from "./MenuItems"

export function SideMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const { Sider } = Layout
  function handleCollapse(value: boolean) {
    setCollapsed(value)
  }
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => handleCollapse(value)}
      style={{
        overflowY: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        backgroundColor: "white",
        zIndex: 2
      }}
    >
      <div
        className="logo"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${logo})`
        }}
      />
      <Menu theme="light" defaultSelectedKeys={["home"]} mode="inline" items={MenuItems} />
      <div
        style={{
          height: "48px"
        }}
      />
    </Sider>
  )
}
