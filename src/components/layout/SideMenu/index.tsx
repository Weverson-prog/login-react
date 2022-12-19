import { Layout, Menu } from "antd"
import { useState } from "react"
import { MenuItems } from "./MenuItems"

export function SideMenu() {
  const [collapsed, setCollapsed] = useState(false)
  const { Sider } = Layout

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      style={{
        backgroundImage: "linear-gradient( #fff, #fff )"
      }}
    >
      <div
        className="logo"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://lh3.googleusercontent.com/pw/AL9nZEWUxTUNlLTWhP9d2dyoKpz6ZnF1EWfGTrmAPDeo5893BvPjV9kXY7V72ZmZ02VAGI2KZnrDiqErIjwLfYB8CO49IA_z9XukMOfW2shVEpUParcLjRtuDjgMqsN6oIBxlv7ctt-fkETdJEvRPZNcB2qV=w100-h71-no?authuser=0)",
          display: "flex",
          justifyContent: "center"
        }}
      />
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline" items={MenuItems} />
    </Sider>
  )
}
