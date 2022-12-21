import { LoadingOutlined } from "@ant-design/icons"
import { Content } from "antd/lib/layout/layout"

export function Loading() {
  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <LoadingOutlined spin style={{ fontSize: 128, color: "hsl(200, 100%, 50%)" }} />
    </Content>
  )
}
