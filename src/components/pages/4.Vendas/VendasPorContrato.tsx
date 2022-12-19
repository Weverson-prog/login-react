import { Button, Card, Checkbox, DatePicker, Layout, Select, Space, Table } from "antd"
import type { CheckboxValueType } from "antd/es/checkbox/Group"

interface DataType {
  key: React.Key
  DataInicial: string
  Operadora: string
  Contrato: string
  Emrpesa: string
  NSU: string
}

export function VendasPorContrato() {
  const { Content } = Layout

  const { Column } = Table

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
  const { Option, OptGroup } = Select

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const { RangePicker } = DatePicker
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues)
  }

  const plainOptions3 = ["Data", "Cartão", "Empresa", "Bandeira", "NSU", "Num.Par", "Par.Conc", "Status"]

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
                title="Empresa"
                dataIndex="EMPRESA"
                key="EMPRESA"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Select defaultValue="Selecione" style={{ width: 300 }} onChange={handleChange}>
                      <OptGroup label="Manager">
                        <Option value="jack">102-TACARUNA - 08165268000438</Option>
                        <Option value="lucy">103-PLAZA - 08165268000519</Option>
                        <Option value="lucy">105-MIDWAY - 08165268000942</Option>
                        <Option value="lucy">110- BARRA - 08165268001167</Option>
                        <Option value="lucy">111-RIOMAR - 08165268001086</Option>
                        <Option value="lucy">106-JARDINS - 07911729000169</Option>
                        <Option value="lucy">107-SALVADOR - 08612911000181</Option>
                        <Option value="lucy">108-SALVADOR NORTE - 08612911000262</Option>
                        <Option value="lucy">109-GUARARAPES - 02358243000121</Option>
                        <Option value="lucy">001-FABRICA - 08165268000195</Option>
                        <Option value="lucy">114 - RIOMAR ARACAJU - 07911729000240</Option>
                        <Option value="lucy">104-MANÃIRA - 08165268000780</Option>
                        <Option value="lucy">101 - RECIFE - 08165268000861</Option>
                        <Option value="lucy">112- RECIFE OFF - 02358243000202</Option>
                      </OptGroup>
                    </Select>
                  </Space>
                )}
              />
            </Table>

            <Table pagination={false} dataSource={data} style={{ background: "#fff" }}>
              <Column
                title="Agrupar por:"
                dataIndex="Agrupar"
                key="Agrupar"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Checkbox.Group options={plainOptions3} defaultValue={["Data"]} onChange={onChange} />
                  </Space>
                )}
              />
            </Table>
          </div>
        </div>

        <div>
          <Button type="primary">
            <a>Filtrar Dados</a>
          </Button>
        </div>
      </Card>
    </Content>
  )
}
