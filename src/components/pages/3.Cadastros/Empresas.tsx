import { SaveOutlined } from "@ant-design/icons"
import { Button, Card, Input, Layout, Space, Table } from "antd"
import React, { useState } from "react"

export function Empresas() {
  const { Content } = Layout

  const { Search } = Input

  const { Column } = Table

  const [loadings, setLoadings] = useState<boolean[]>([])

  const onSearch = (value: string) => console.log(value)
  const enterLoading = (index: number) => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings]
      newLoadings[index] = true
      return newLoadings
    })

    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings]
        newLoadings[index] = false
        return newLoadings
      })
    }, 6000)
  }

  interface DataType {
    key: React.Key
    firstName: string
    lastName: string
    age: number
    address: string
    tags: string[]
  }

  const data: DataType[] = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ]

  return (
    <Content
      className="site-layout-background"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <article>
        <Card style={{ backgroundColor: "#f0f5ff", margin: "20px 24px 0", overflow: "initial" }}>
          <div style={{ margin: "20px  0" }}>
            <Search placeholder="Pesquisar" onSearch={onSearch} style={{ width: 200 }} />
            <br></br>
            <br></br>
            <Table dataSource={data}>
              <Column
                title="CNPJ"
                dataIndex="CNPJ"
                key="CNPJ"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Input bordered={false} placeholder="" />
                  </Space>
                )}
              />
              <Column
                title="RAZÃO SOCIAL"
                dataIndex="RAZAO_SOCIAL"
                key="RAZAO_SOCIAL"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Input placeholder="" />
                  </Space>
                )}
              />
              <Column
                title="COD. FILIAL"
                dataIndex="COD_FILIAL"
                key="COD_FILIAL"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Input placeholder="" />
                  </Space>
                )}
              />
              <Column
                title="SALVAR"
                dataIndex={"SALVAR"}
                key="SALVAR"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Button
                      type="primary"
                      icon={<SaveOutlined />}
                      loading={loadings[1]}
                      onClick={() => enterLoading(1)}
                    />
                  </Space>
                )}
              />
            </Table>
          </div>
        </Card>
      </article>
    </Content>
  )
}
