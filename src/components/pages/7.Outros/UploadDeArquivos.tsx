import { UploadOutlined } from "@ant-design/icons"
import { Button, Card, Layout, message, Select, Space, Table, Upload, UploadProps } from "antd"

interface DataType1 {
  key: React.Key
  Upload: string
  Operadora: string
  Campo: string
}

interface DataType {
  key: React.Key
  NomeArquivo: string
  Marketplace: string
  Download: string
  Acoes: string
}

export function UploadDeArquivos() {
  const { Content } = Layout

  const { Column } = Table

  const data1: DataType1[] = [
    {
      key: "7",
      Upload: " ",
      Operadora: " ",
      Campo: " "
    }
  ]

  const data: DataType[] = [
    {
      key: "1",
      NomeArquivo: " ",
      Marketplace: " ",
      Download: " ",
      Acoes: " "
    }
  ]

  const { Option, OptGroup } = Select

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <Content style={{ background: "#fff" }}>
      <Card>
        <h1 style={{ fontSize: "30px", fontFamily: '"Roboto", "Helvetica Neue", Arial, sans-serif', color: "black" }}>
          Upload de Arquivos da Operadora
        </h1>

        <div style={{ margin: 0, padding: 0 }}>
          <Table pagination={false} dataSource={data1}>
            <Column
              title="Selecione os arquivos para upload:"
              dataIndex="Upload"
              key="Upload"
              render={(_: any, record: DataType1) => (
                <Space size="middle">
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Space>
              )}
            />

            <Column
              title="Operadora/ Marketplace"
              dataIndex="Operadora"
              key="Operadora"
              render={(_: any, record: DataType1) => (
                <Space size="middle">
                  <Select defaultValue="Selecione" style={{ width: 300 }} onChange={handleChange}>
                    <Option value="Campo1"> </Option>
                    <Option value="Campo2"> </Option>
                  </Select>
                </Space>
              )}
            />

            <Column
              title=" "
              dataIndex="Campo"
              key="Campo"
              render={(_: any, record: DataType1) => (
                <Space size="middle">
                  <Select defaultValue="Selecione" style={{ width: 300 }} onChange={handleChange}>
                    <OptGroup label="Opções">
                      <Option value="Esperando">Esperando</Option>
                      <Option value="Processando">Processando</Option>
                      <Option value="Importado">Importado</Option>
                      <Option value="Erro">Erro</Option>
                    </OptGroup>
                  </Select>
                </Space>
              )}
            />
            <Column
              title=" "
              key="action"
              render={(_: any, record: DataType1) => (
                <Space size="middle">
                  <Button type="primary">
                    <a>Enviar Arquivos</a>
                  </Button>
                </Space>
              )}
            />
          </Table>
        </div>
        <div>
          <Table style={{ marginTop: "20px" }} dataSource={data}>
            <Column title="Nome Arquivo" dataIndex="NomeArquivo" key="NomeArquivo" />
            <Column title="Marketplace" dataIndex="Marketplace" key="Marketplace" />
            <Column title="Download" dataIndex="Download" key="Download" />
            <Column title="Ações" dataIndex="Acoes" key="Acoes" />
          </Table>
        </div>
      </Card>
    </Content>
  )
}
