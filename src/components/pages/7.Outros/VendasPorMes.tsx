import { Card, Input, Layout, Space, Table } from "antd"

interface DataType {
  key: React.Key
  ANO: string
  MES: string
  OPERADORA: string
  VENDAS: string
  VALORCONTRATADO: string
  DIFERENCA: string
}

export function VendasPorMes() {
  const { Content } = Layout

  const { Search } = Input

  const onSearch = (value: string) => console.log(value)

  const { Column, ColumnGroup } = Table

  const data: DataType[] = [
    {
      key: "1",
      ANO: "2022",
      MES: "JANEIRO",
      OPERADORA: "GETNET",
      VENDAS: "W K CONFECCOES LTDA",
      VALORCONTRATADO: "08165268000780",
      DIFERENCA: "1418698"
    },
    {
      key: "2",
      ANO: "2022",
      MES: "JANEIRO",
      OPERADORA: "GETNET",
      VENDAS: "FLEX MODA LTDA",
      VALORCONTRATADO: "08165268000780",
      DIFERENCA: "1418698"
    },
    {
      key: "3",
      ANO: "2022",
      MES: "JANEIRO",
      OPERADORA: "GETNET",
      VENDAS: "WJW COMERCIO DE MODA LTDA.",
      VALORCONTRATADO: "08165268000780",
      DIFERENCA: "1418698"
    },

    {
      key: "4",
      OPERADORA: "GETNET",
      ANO: "2022",
      MES: "JANEIRO",
      VENDAS: "BUZIOS MODA LTDA. EPP",
      VALORCONTRATADO: "08165268000780",
      DIFERENCA: "1418698"
    },

    {
      key: "5",
      ANO: "2022",
      MES: "JANEIRO",
      OPERADORA: "GETNET",
      VENDAS: "W K CONFECCOES LTDA",
      VALORCONTRATADO: "08165268000780",
      DIFERENCA: "1418698"
    },

    {
      key: "6",
      ANO: "2022",
      MES: "JANEIRO",
      OPERADORA: "GETNET",
      VENDAS: "W K CONFECCOES LTDA",
      VALORCONTRATADO: "08165268000780",
      DIFERENCA: "1418698"
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
              <Column title="ANO" dataIndex="ANO" key="ANO" />
              <Column title="MÊS" dataIndex="MES" key="MES" />
              <Column title="OPERADORA" dataIndex="OPERADORA" key="OPERADORA" />
              <Column title="VENDAS" dataIndex="VENDAS" key="VENDAS" />
              <Column title="VALOR CONTRATADO" dataIndex="VALORCONTRATADO" key="VALORCONTRATADO" />
              <Column title="DIFERENÇA" dataIndex="DIFERENCA" key="DIFERENCA" />
            </ColumnGroup>
          </Table>
        </div>
      </Card>
    </Content>
  )
}
