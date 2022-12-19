import { Button, Card, Input, Layout, Select, Space, Table } from "antd"
export function Contratos() {
  const { Content } = Layout
  /*campo pesquisa inicio*/
  const { Search } = Input
  const onSearch = (value: string) => console.log(value)
  /*campo pesquisa fim*/

  /*inicio tabela*/
  const { Column, ColumnGroup } = Table
  interface DataType {
    key: React.Key
    OPERADORA: string
    PVMATRIZ: string
    PV: string
    EMPRESA: string
    TIPO: string
  }
  const data: DataType[] = [
    {
      key: "1",
      OPERADORA: "GETNET",
      EMPRESA: "W K CONFECCOES LTDA",
      PVMATRIZ: "1418698",
      PV: "1418685",
      TIPO: "SAQUE"
    },
    {
      key: "2",
      OPERADORA: "GETNET",
      EMPRESA: "FLEX MODA LTDA",
      PVMATRIZ: "1418698",
      PV: "1418685",
      TIPO: "SAQUE"
    },
    {
      key: "3",
      OPERADORA: "GETNET",
      EMPRESA: "WJW COMERCIO DE MODA LTDA.",
      PVMATRIZ: "1418698",
      PV: "1418685",
      TIPO: "SAQUE"
    },

    {
      key: "4",
      OPERADORA: "GETNET",
      EMPRESA: "BUZIOS MODA LTDA. EPP",
      PVMATRIZ: "1418698",
      PV: "1418685",
      TIPO: "SAQUE"
    },

    {
      key: "5",
      OPERADORA: "GETNET",
      EMPRESA: "W K CONFECCOES LTDA",
      PVMATRIZ: "1418698",
      PV: "1418685",
      TIPO: "SAQUE"
    },

    {
      key: "6",
      OPERADORA: "GETNET",
      EMPRESA: "W K CONFECCOES LTDA",
      PVMATRIZ: "1418698",
      PV: "1418685",
      TIPO: "SAQUE"
    }
  ]
  /*fim tabela*/

  /*inicio select*/
  const { Option, OptGroup } = Select
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  /*FIM select*/
  return (
    <Content style={{ background: "#fff" }}>
      {/*campo pesquisa inicio*/}
      <Card>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="Buscar Cadastros"
              onSearch={onSearch}
              enterButton
              style={{ width: 304, marginLeft: "2px", marginBottom: "3px" }}
            />
          </Space>
        </div>
        {/*campo pesquisa fim*/}

        <div style={{ marginLeft: "2px", marginTop: "3px" }}>
          <Table dataSource={data}>
            <ColumnGroup>
              <Column title="OPERADORA" dataIndex="OPERADORA" key="OPERADORA" />
              <Column title="PV MATRIZ" dataIndex="PVMATRIZ" key="PVMATRIZ" />
              <Column title="PV" dataIndex="PV" key="PV" />
              <Column title="EMPRESA" dataIndex="EMPRESA" key="EMPRESA" />
              <Column title="TIPO" dataIndex="TIPO" key="TIPO" />

              <Column
                title="EMPRESA"
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
                title="TIPO"
                dataIndex="TIPO"
                key="TIPO"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Select defaultValue="Selecione" style={{ width: 200 }} onChange={handleChange}>
                      <Option value="jack">SAQUE</Option>
                      <Option value="lucy">FLUXO</Option>
                    </Select>
                  </Space>
                )}
              />
            </ColumnGroup>

            <Column
              title="EDITAR"
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <Button type="primary">
                    <a>Editar</a>
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
