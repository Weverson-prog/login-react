import { Button, Card, DatePicker, Layout, Space, Table } from "antd"

export function VendasNaoExpor() {
  const { Content } = Layout

  const { Column } = Table

  interface DataType {
    key: React.Key
    DataInicial: string
    Operadora: string
    Contrato: string
    Emrpesa: string
    NSU: string
  }
  const data: DataType[] = [
    {
      key: "1",
      DataInicial: "",
      Operadora: "",
      Contrato: "",
      Emrpesa: "",
      NSU: ""
    }
  ]
  const { RangePicker } = DatePicker

  return (
    <Content style={{ background: "#fff", margin: "0px", padding: "0px" }}>
      <Card>
        <div>
          <Table pagination={false} dataSource={data}>
            <Column
              title="Data Inicial - Data Final"
              dataIndex="DataInicial"
              key="DataInicial"
              render={(_: any, record: DataType) => (
                <Space direction="vertical" size={12} style={{ width: 216 }}>
                  <RangePicker />
                </Space>
              )}
            />
          </Table>

          <Table pagination={false} dataSource={data}>
            <Column
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <Button type="primary">
                    <a>Filtrar Dados</a>
                  </Button>
                </Space>
              )}
            />
          </Table>
        </div>
      </Card>
    </Content>
  )
}
