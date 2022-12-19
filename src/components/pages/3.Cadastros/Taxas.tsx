import { Button, Card, Input, Layout, Space, Table } from "antd"

interface DataType {
  key: React.Key
  OPERADORA: string
  EMPRESA: string
  CNPJ: string
  PVMATRIZ: string
  PV: string
}

export function Taxas() {
  const { Content } = Layout

  /*campo pesquisa inicio*/
  const { Search } = Input

  const onSearch = (value: string) => console.log(value)
  /*campo pesquisa fim*/

  /*inicio tabela*/
  const { Column, ColumnGroup } = Table

  const data: DataType[] = [
    {
      key: "1",
      OPERADORA: "GETNET",
      EMPRESA: "W K CONFECCOES LTDA",
      CNPJ: "08165268000780",
      PVMATRIZ: "1418698",
      PV: "1418685"
    },
    {
      key: "2",
      OPERADORA: "GETNET",
      EMPRESA: "FLEX MODA LTDA",
      CNPJ: "08165268000780",
      PVMATRIZ: "1418698",
      PV: "1418685"
    },
    {
      key: "3",
      OPERADORA: "GETNET",
      EMPRESA: "WJW COMERCIO DE MODA LTDA.",
      CNPJ: "08165268000780",
      PVMATRIZ: "1418698",
      PV: "1418685"
    },

    {
      key: "4",
      OPERADORA: "GETNET",
      EMPRESA: "BUZIOS MODA LTDA. EPP",
      CNPJ: "08165268000780",
      PVMATRIZ: "1418698",
      PV: "1418685"
    },

    {
      key: "5",
      OPERADORA: "GETNET",
      EMPRESA: "W K CONFECCOES LTDA",
      CNPJ: "08165268000780",
      PVMATRIZ: "1418698",
      PV: "1418685"
    },

    {
      key: "6",
      OPERADORA: "GETNET",
      EMPRESA: "W K CONFECCOES LTDA",
      CNPJ: "08165268000780",
      PVMATRIZ: "1418698",
      PV: "1418685"
    }
  ]

  return (
    <Content style={{ background: "#fff" }}>
      {/*campo pesquisa inicio*/}
      <Card>
        <div>
          <Space direction="vertical">
            <Search
              placeholder="digite a pesquisa"
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
              <Column title="EMPRESA" dataIndex="EMPRESA" key="EMPRESA" />
              <Column title="CNPJ" dataIndex="CNPJ" key="CNPJ" />
              <Column title="PV MATRIZ" dataIndex="PVMATRIZ" key="PVMATRIZ" />
              <Column title="PV" dataIndex="PV" key="PV" />
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
            </ColumnGroup>
          </Table>
        </div>

        <div>
          <Button type="primary">
            <a>Incluir Taxas</a>
          </Button>
        </div>
      </Card>
    </Content>
  )
}
