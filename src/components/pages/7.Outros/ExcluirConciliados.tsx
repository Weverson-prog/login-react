import { Button, Card, DatePicker, Input, Layout, Select, Space, Table } from "antd"
interface DataType {
  key: React.Key
  DataInicial: string
  Operadora: string
  Bandeira: string
  Contrato: string
  Tpo: string
}

export function ExcluirConciliados() {
  const { Content } = Layout
  const { Column } = Table

  const data: DataType[] = [
    {
      key: "1",
      DataInicial: "",
      Operadora: "",
      Bandeira: "",
      Contrato: "",
      Tpo: ""
    }
  ]

  const { Option, OptGroup } = Select

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const { RangePicker } = DatePicker

  const { Search } = Input

  const onSearch = (value: string) => console.log(value)

  return (
    <Content style={{ background: "#fff" }}>
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

          <div style={{ margin: 0, padding: 0 }}>
            <Table pagination={false} dataSource={data}>
              <Column
                title="Operadora"
                dataIndex="Operadora"
                key="Operadora"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Select defaultValue="Selecione" style={{ width: 200 }} onChange={handleChange}>
                      <Option value="Saque"> </Option>
                      <Option value="Fluxo"> </Option>
                    </Select>
                  </Space>
                )}
              />

              <Column
                title="Bandeira"
                dataIndex="Bandeira"
                key="Bandeira"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Select defaultValue="Selecione" style={{ width: 200 }} onChange={handleChange}>
                      <Option value="Saque"> </Option>
                      <Option value="Fluxo"> </Option>
                    </Select>
                  </Space>
                )}
              />

              <Column
                title="Contrato"
                dataIndex="Contrato"
                key="Contrato"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Select defaultValue="Selecione" style={{ width: 200 }} onChange={handleChange}>
                      <Option value="Saque"> </Option>
                      <Option value="Fluxo"> </Option>
                    </Select>
                  </Space>
                )}
              />

              <Column
                title="Tpo"
                dataIndex="Tpo"
                key="Tpo"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Select defaultValue="Selecione" style={{ width: 300 }} onChange={handleChange}>
                      <OptGroup label="Selecione">
                        <Option value="Forçada">Forçada</Option>
                        <Option value="Automático">Automático</Option>
                        <Option value="Substituição">Substituição</Option>
                      </OptGroup>
                    </Select>
                  </Space>
                )}
              />
            </Table>

            <Space direction="vertical">
              <Search
                placeholder="Buscar"
                onSearch={onSearch}
                enterButton
                style={{ width: 304, marginTop: "20px", marginBottom: "20px" }}
              />
            </Space>
          </div>
        </div>

        <div>
          <Button type="primary">
            <a>Confirmar</a>
          </Button>
        </div>
      </Card>
    </Content>
  )
}
