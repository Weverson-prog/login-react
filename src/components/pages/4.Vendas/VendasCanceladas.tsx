import { Button, Card, Checkbox, DatePicker, Layout, Select, Space, Table } from "antd"
import type { CheckboxValueType } from "antd/lib/checkbox/Group"
import { BarChartOutlined, } from "@ant-design/icons";

export function VendasCanceladas() {
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

  const { Option } = Select

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const { RangePicker } = DatePicker
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues)
  }

  const plainOptions3 = ["DT.DEB.", "DT.Venda", "NSU", "Pedido", "Bandeira", "PRC", "Banco", "Agência", "Conta"]
  return (
    <Content style={{ background: "#fff" }}>
      <Card>
        <Button
          onClick={mostrardiv}
          id="show-btn"
          type="primary"
          icon={<BarChartOutlined />}
          size="large"
          style={{ marginLeft: "170vh", marginBottom: "15px" }}
        />
        <div id="filter" style={{ display: "none" }}>
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
          </Table>

          <div style={{ margin: 0, padding: 0 }}>
            <Table pagination={false} dataSource={data} style={{ background: "#fff" }}>
              <Column
                title="Agrupar por:"
                dataIndex="Agrupar"
                key="Agrupar"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Checkbox.Group options={plainOptions3} defaultValue={["DT.DEB."]} onChange={onChange} />
                  </Space>
                )}
              />
            </Table>
          </div>
          <div>
            <Button type="primary">
              <a>Filtrar Dados</a>
            </Button>
          </div>
        </div>
      </Card>
    </Content>
  )
}
