import { DownloadOutlined, BarChartOutlined } from "@ant-design/icons"
import logo from "@assets/img/praticoLogo.png"
import type { DatePickerProps } from "antd"
import { Button, Card, DatePicker, InputNumber, Layout, Select, Space, Table } from "antd"

export function InclusaoDeAjuste() {
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

  function mostrardiv() {
    let element = document.getElementById("filter");
    if (element?.style.display == "none") {
      console.log("estou aqui");
      element.style.display = "block";
    } else if (element?.style.display == "block") {
      console.log("alou aqui");
      element.style.display = "none";
    }
  }

  return (
    <Content
      className="site-layout-background"
      style={{
        backgroundColor: "#fff"
      }}
    >
      <article>
        <Card style={{ backgroundColor: "#FFF", margin: "20px 24px 0", overflow: "initial" }}>
          <Button
            onClick={mostrardiv}
            id="show-btn"
            type="primary"
            icon={<BarChartOutlined />}
            size="large"
            style={{ marginLeft: "165vh", marginBottom: "15px" }}
          />

          <div id="filter" style={{ margin: "20px  0", display:"none"}}>
            <Table pagination={false} dataSource={data}>
              <Column
                title="DATA INICIAL"
                dataIndex="DATA_INICIAL"
                key="DATA_INICIAL"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="DATA FINAL"
                dataIndex="DATA_FINAL"
                key="DATA_FINAL"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="STATUS "
                dataIndex="STATUS"
                key="STATUS"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "NAO_BAIXADOS",
                          label: "NÃO BAIXADOS"
                        },
                        {
                          value: "BAIXADOS",
                          label: "BAIXADOS"
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
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250
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
            </Table>
            <br></br>
            <Button type="primary" icon={"Filtrar"} size="large" style={{ width: 100 }} />
            <br></br>
            <br></br>
            <InputNumber prefix="R$" style={{ width: "20%" }} />
            <Button type="primary" icon={<DownloadOutlined />} size={"small"} />
          </div>
        </Card>
      </article>
    </Content>
  )
}
