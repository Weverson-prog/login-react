import { Button, Card, Input, Layout, Space } from "antd"

export function Mensagens() {
  const { Content } = Layout

  const { Search } = Input

  const onSearch = (value: string) => console.log(value)

  const { TextArea } = Input

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("Change:", e.target.value)
  }

  return (
    <Content style={{ background: "#fff" }}>
      <Card style={{ height: "100%", justifyContent: "space-between", padding: 0, margin: 0 }}>
        <div>
          <Card className="message" style={{ width: "50%", position: "absolute", left: "10px" }}>
            <Space direction="vertical">
              <Search
                placeholder="Pesquisar"
                onSearch={onSearch}
                enterButton
                style={{ width: 304, marginLeft: "-15px", marginBottom: "20px" }}
              />
            </Space>
            <h6 style={{ marginBottom: "60px" }}>Mensagens</h6>
          </Card>

          <Card className="justificativa" style={{ width: "45%", position: "absolute", left: "54%", right: "10px" }}>
            <div>
              <h6>Justificativa</h6>
              <TextArea showCount maxLength={100} onChange={onChange} />
            </div>
            <div className="card-button" style={{ marginTop: "20px" }}>
              <Button className="button" style={{ marginRight: "60px" }} type="primary">
                <a>Add Comentário</a>
              </Button>
              <Button type="primary">
                <a>Finalizada</a>
              </Button>
            </div>
          </Card>
        </div>
      </Card>
    </Content>
  )
}
