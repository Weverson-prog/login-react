import { BellOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Header } from "antd/lib/layout/layout"
import notification, { NotificationPlacement } from "antd/lib/notification"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function PageHeader() {
  let location = useLocation()

  function getCurrentRoute() {
    const path = location.pathname
    if (path === "/") return "HOME"
    const parsePathRegex = /\/|_/g
    return path.replace(parsePathRegex, " ").toUpperCase()
  }

  // Change the title of the page with the current route
  useEffect(() => {
    document.title = `Prático - ${getCurrentRoute()}`
  }, [location])

  const openNotification = (placement: NotificationPlacement) => {
    notification.info({
      message: `Notificação `,
      description: "Sua notificação personalizada aqui!!!",
      placement
    })
  }
  return (
    <Header
      className="site-layout-background"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1b71da",
        backgroundImage:
          "linear-gradient(to left,#1b71da, #3c89e3, #3c89e3, #5da0ed, #7eb8f6, #7eb8f6, #9fcfff, #9fcfff, #9fcfff,  #fff)"
      }}
    >
      <h2
        style={{
          display: "block",
          textAlign: "left",
          marginLeft: "0.01vw",
          marginRight: "",
          marginTop: "10px",
          color: "#5da0ed",
          WebkitTextStroke: "1px",
          WebkitTextStrokeColor: "#5da0ed"
        }}
      >
        {getCurrentRoute()}
      </h2>
      <Button
        className="notification-button"
        type="primary"
        shape="round"
        onClick={() => openNotification("bottomRight")}
        icon={<BellOutlined />}
        size={"large"}
        style={{ marginLeft: "auto", display: "block" }}
      ></Button>
    </Header>
  )
}
