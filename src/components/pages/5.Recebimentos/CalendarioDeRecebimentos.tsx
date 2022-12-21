import logo from "@assets/img/praticoLogo.png"
import type { BadgeProps } from "antd"
import { Badge, Calendar, Card, Layout } from "antd"

export function CalendarioDeRecebimento() {
  const { Content } = Layout

  const getListData = (value: any) => {
    let listData
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." }
        ]
        break
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." }
        ]
        break
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event。。...." },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." }
        ]
        break
      default:
    }
    return listData || []
  }

  const getMonthData = (value: any) => {
    if (value.month() === 8) {
      return 1394
    }
  }

  const monthCellRender = (value: any) => {
    const num = getMonthData(value)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null
  }

  const dateCellRender = (value: any) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps["status"]} text={item.content} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Content
      className="site-layout-background"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <article>
        <Card style={{ backgroundColor: "#f0f5ff", margin: "20px 24px 0", overflow: "initial" }}>
          <div style={{ margin: "20px  0" }}>
            <Card>
              <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
            </Card>
          </div>
        </Card>
      </article>
    </Content>
  )
}
