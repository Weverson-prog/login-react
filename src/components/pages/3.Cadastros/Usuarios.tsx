import { Button, Input, Layout, Space } from "antd"

import { Card, Table, Tag } from "antd"

interface DataType {
  key: React.Key
  USUÁRIO: string
  LOGIN: string
  tags: string[]
}

export function Usuarios() {
  const { Content } = Layout
  const { Column, ColumnGroup } = Table

  const { Search } = Input

  const onSearch = (value: string) => console.log(value)

  const data: DataType[] = [
    {
      key: "1",
      USUÁRIO: "John",
      LOGIN: "jhonnaovolta22@hotmail.com",
      tags: ["ativo"]
    },
    {
      key: "2",
      USUÁRIO: "Bill",
      LOGIN: "billnaokill@gmail.com",
      tags: ["inativo"]
    },
    {
      key: "3",
      USUÁRIO: "Joe",
      LOGIN: "joeydofriends@gmail.com",
      tags: ["ativo"]
    },

    {
      key: "4",
      USUÁRIO: "Houtag",
      LOGIN: "houtagaleatorio@gmail.com",
      tags: ["inativo"]
    },

    {
      key: "5",
      USUÁRIO: "Isis",
      LOGIN: "isiscpa@gmail.com",
      tags: ["inativo"]
    },

    {
      key: "6",
      USUÁRIO: "Weverson",
      LOGIN: "blackkirito@gmail.com",
      tags: ["ativo"]
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
              <Column title="USUÁRIO" dataIndex="USUÁRIO" key="USUÁRIO" />
              <Column title="LOGIN" dataIndex="LOGIN" key="LOGIN" />
            </ColumnGroup>
            <Column
              title="Ativo"
              dataIndex="tags"
              key="tags"
              render={(tags: string[]) => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? "red" : "green"
                    if (tag === "loser") {
                      color = "volcano"
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    )
                  })}
                </>
              )}
            />
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
        <div>
          <Button type="primary">
            <a>Incluir Usuário</a>
          </Button>
        </div>
      </Card>
    </Content>
  )
}
