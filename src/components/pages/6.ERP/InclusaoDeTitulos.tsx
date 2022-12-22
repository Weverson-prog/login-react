import { SearchOutlined } from "@ant-design/icons"
import logo from "@assets/img/praticoLogo.png"
import type { DatePickerProps } from "antd"
import { Button, Card, DatePicker, Layout, Select, Space, Table } from "antd"

export function InclusaoDeTitulos() {
  const { Content } = Layout

  const { Column } = Table

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

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

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <Content
      className="site-layout-background"
      style={{
        backgroundColor: "#EFF2F5"
      }}
    >
      <article>
        <Card style={{ backgroundColor: "#f0f5ff", margin: "20px 24px 0", overflow: "initial" }}>
          <div style={{ margin: "20px  0" }}>
            <Table pagination={false} dataSource={data}>
              <Column
                title="DATA INCIAL"
                dataIndex="DATA_INICIAL"
                key="DATA_INICIAL"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />

              <Column
                title="DATA DE VENCIMENTO INICIAL"
                dataIndex="DATA_DE_VENCIMENTO_INICIAL"
                key="DATA_DE_VENCIMENTO_INICIAL"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="DATA DE VENCIMENTO FINAL"
                dataIndex="DATA_DE_VENCIMENTO_FINAL"
                key="DATA_DE_VENCIMENTO_FINAL"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="FILIAL"
                dataIndex="FILIAL"
                key="FILIAL"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 120
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null"
                        }
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="BANDEIRA"
                dataIndex="BANDEIRA"
                key="BANDEIRA"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 120
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null"
                        }
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="CONTRATOS"
                dataIndex="CONTRATOS"
                key="CONTRATOS"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 120
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null"
                        }
                      ]}
                    />
                  </Space>
                )}
              />

              <Column
                title="OPERADORA"
                dataIndex="OPERADORA"
                key="OPERADORA"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 120
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null"
                        }
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="NSU"
                dataIndex="NSU"
                key="NSU"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 120
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null"
                        }
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="OPERAÇÃO"
                dataIndex="OPERACAO"
                key="OPERACAO"
                render={(_: any, record: DataType) => (
                  <Space size="small">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 120
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "ERP",
                          label: "ERP"
                        },
                        {
                          value: "OPE",
                          label: "OPE"
                        }
                      ]}
                    />
                  </Space>
                )}
              />
            </Table>
            <br></br>
            <Button type="primary" shape="round" icon={"CONFIRMAR"} size={"middle"} style={{ width: 150 }} />
            <br></br>
            <br></br>
            <Button icon={<SearchOutlined />} size={"middle"} style={{ width: 150 }} />
          </div>
        </Card>
      </article>
    </Content>
  )
}
