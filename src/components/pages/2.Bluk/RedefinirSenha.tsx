import logo from "@assets/img/praticoLogo.png"
import { Button, Card, Input, Layout, Space, Table } from "antd"

export function RedefinirSenha() {
  const { Content } = Layout

  const { Column } = Table

  interface DataType {
    key: React.Key
    OPERADORA: string
    STATUS: string
    CONFIG_BAIXAS: number
    INCLUSAO_DE_AJUSTES: string
    EMPRESA: string[]
  }

  const data: DataType[] = [
    {
      key: "1",
      OPERADORA: "",
      STATUS: "",
      CONFIG_BAIXAS: 32,
      INCLUSAO_DE_AJUSTES: "",
      EMPRESA: ["nice", "developer"]
    }
  ]

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
            <Table pagination={false} dataSource={data}>
              <Column
                title="SENHA"
                dataIndex="SENHA"
                key="SENHA"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Input style={{ width: "200px" }} placeholder="" />
                  </Space>
                )}
              />
              <Column
                title="CONFIRMAR SENHA "
                dataIndex="CONFIRMAR_SENHA"
                key="CONFIRMAR_SENHA"
                render={(_: any, record: DataType) => (
                  <Space style={{ width: "200px" }} size="large">
                    <Input placeholder="" />
                  </Space>
                )}
              />
            </Table>
            <br></br>
            <Button type="primary" icon={"SALVAR"} size="large" style={{ width: 100 }} />
            <br></br>
          </div>
        </Card>
      </article>
    </Content>
  )
}
