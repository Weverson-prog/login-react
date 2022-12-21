import { AutoComplete, Button, Card, Checkbox, DatePicker, Layout, Select, Space, Table } from "antd"
import type { CheckboxValueType } from "antd/lib/checkbox/Group"
import { useState } from "react"

interface DataType {
  key: React.Key
  DataInicial: string
  Operadora: string
  Contrato: string
  Emrpesa: string
  NSU: string
}

export function VendasPorFilial() {
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
  const [options, setOptions] = useState<{ value: string; label: string }[]>([])

  const handleSearch = (value: string) => {
    let res: { value: string; label: string }[] = []
    if (!value || value.indexOf("@") >= 0) {
      res = []
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(domain => ({
        value,
        label: `${value}@${domain}`
      }))
    }
    setOptions(res)
  }

  const { RangePicker } = DatePicker

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues)
  }

  const plainOptions = ["Todos", "Conciliados", "Não Conciliados"]

  const plainOptions1 = ["OPE", "ERP"]

  const plainOptions2 = ["Sintético", "Analítico"]

  const plainOptions3 = ["Contrato", "Data", "Status", "Detalhe"]

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

            <Column
              title="NSU"
              dataIndex="NSU"
              key="NSU"
              render={(_: any, record: DataType) => (
                <Space size="middle" style={{ marginRight: "5px", width: "100%" }}>
                  <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="" options={options} />
                </Space>
              )}
            />
          </Table>

          <div style={{ margin: 0, padding: 0 }}>
            <Table pagination={false} dataSource={data}>
              <Column
                title="Status"
                dataIndex="Status"
                key="Status"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Checkbox.Group options={plainOptions} defaultValue={["Todos"]} onChange={onChange} />
                  </Space>
                )}
              />

              <Column
                title="Visão"
                dataIndex="Visao"
                key="Visao"
                render={(_: any, record: DataType) => (
                  <Space size="middle" style={{ marginRight: "5px", width: "100%" }}>
                    <Checkbox.Group options={plainOptions1} defaultValue={["OPE"]} onChange={onChange} />
                  </Space>
                )}
              />

              <Column
                title="Tipo"
                dataIndex="Tipo"
                key="Tipo"
                render={(_: any, record: DataType) => (
                  <Space size="middle" style={{ marginRight: "5px", width: "100%" }}>
                    <Checkbox.Group options={plainOptions2} defaultValue={["Sintético"]} onChange={onChange} />
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
                    <Checkbox.Group options={plainOptions3} defaultValue={["Contrato"]} onChange={onChange} />
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
