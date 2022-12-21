import { Button, Card, Checkbox, Layout, Select, Space, Table } from "antd"

import type { CheckboxChangeEvent } from "antd/lib/checkbox/"

export function ConfigOperadoras() {
  const { Content } = Layout

  const { Column } = Table

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  interface DataType {
    key: React.Key
    OPERADORA: string
    STATUS: string
    CONFIG_BAIXAS: number
    INCLUSAO_DE_AJUSTES: string
    EMPRESA: string[]
  }

  const data: DataType[] = [
    {
      key: "1",
      OPERADORA: "",
      STATUS: "",
      CONFIG_BAIXAS: 32,
      INCLUSAO_DE_AJUSTES: "",
      EMPRESA: ["nice", "developer"]
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
            <Table pagination={false} dataSource={data}>
              <Column
                title="OPERADORA"
                dataIndex="OPERADORA"
                key="OPERADORA"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null"
                        }
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="STATUS"
                dataIndex="STATUS"
                key="STATUS"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "ASSOCIADO",
                          label: "ASSOCIADO"
                        },
                        {
                          value: "NAO_ASSOCIADO",
                          label: "NÃO ASSOCIADO"
                        }
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="CONFIG. BAIXAS"
                dataIndex="CONFIG_BAIXAS"
                key="CONFIG_BAIXAS"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Checkbox onChange={onChange}>CONTAS BAIXAS</Checkbox>
                  </Space>
                )}
              />
              <Column
                title="INCLUSÃO DE AJUSTES "
                dataIndex="INCLUSAO_DE_AJUSTES"
                key="INCLUSAO_DE_AJUSTES"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Checkbox onChange={onChange}>CONTAS</Checkbox>
                    <Checkbox onChange={onChange}>PLANO CONTA</Checkbox>
                  </Space>
                )}
              />
            </Table>
            <br></br>
            <Button type="primary" shape="round" icon={"Filtrar"} size={"large"} style={{ width: 100 }} />
            <br></br>
            <br></br>

            {/* CONTAS!!!}
    <Table dataSource={data}>
        <Column title="MATRIZ"  dataIndex="MATRIZ" key="MATRIZ" render={(_: any, record: DataType) => (
        <Space size="middle">
          <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
      <Column title="PV"  dataIndex="PV" key="PV" render={(_: any, record: DataType) => (
        <Space size="large">
          <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
      <Column title="OPERADORA"  dataIndex="OPERADORA" key="OPERADORA" render={(_: any, record: DataType) => (
        <Space size="large">
        <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
      <Column title="CENTRO CUSTO"  dataIndex="CENTRO_CUSTO" key="CENTRO_CUSTO" render={(_: any, record: DataType) => (
        <Space size="large">
        <Select   
      defaultValue="Selecione"
      style={{ 
        width: 250 }}
      onChange={handleChange}
      options={[
        {
          value: 'null',
          label: 'Null',
        }
      ]}
    />
        </Space> 
      )}
      /> 
      <Column title="CONTAS"  dataIndex="CONTAS" key="CONTAS" render={(_: any, record: DataType) => (
        <Space size="large">
        <Select   
      defaultValue="Selecione"
      style={{ 
        width: 250 }}
      onChange={handleChange}
      options={[
        {
          value: 'null',
          label: 'Null',
        }
      ]}
    />
        </Space> 
      )}
      /> 
    
      <Column title="FORNECEDOR"  dataIndex="FORNECEDOR" key="FORNECEDOR" render={(_: any, record: DataType) => (
        <Space size="large">
          <Select   
      defaultValue="Selecione"
      style={{ 
        width: 250 }}
      onChange={handleChange}
      options={[
        {
          value: 'null',
          label: 'Null',
        }
      ]}
    />
        </Space> 
      )}
      /> 
      <Column title="SALVAR"  dataIndex="SALVAR" key="SALVAR" render={(_: any, record: DataType) => (
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

    {/* PLANO CONTA!!!
    <Table dataSource={data}>
        <Column title="TIPO DE AJUSTE"  dataIndex="TIPO_DE_AJUSTE" key="TIPO_DE_AJUSTE" render={(_: any, record: DataType) => (
        <Space size="middle">
          <Select   
      defaultValue="Selecione"
      style={{ 
        width: 250 }}
      onChange={handleChange}
      options={[
        {
          value: 'null',
          label: 'Null',
        }
      ]}
    />
        </Space> 
      )}
      /> 
      <Column title="P. CONTAS"  dataIndex="P_CONTAS" key="P_CONTAS" render={(_: any, record: DataType) => (
        <Space size="large">
          <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
      <Column title="C. CONTÁBIL"  dataIndex="C_CONTABIL" key="C_CONTABIL" render={(_: any, record: DataType) => (
        <Space size="large">
        <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
    
      <Column title="SALVAR"  dataIndex="SALVAR" key="SALVAR" render={(_: any, record: DataType) => (
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
      <Column title="DELETAR"  dataIndex="DELETAR" key="DELETAR" render={(_: any, record: DataType) => (
        <Space size="large">
         <Button
            type="primary"
            icon={<DeleteOutlined />}
            loading={loadings[1]}
             onClick={() => enterLoading(1)}
           />
        </Space> 
      )}
      /> 
     
  </Table>
      */}

            {/* CONTAS BAIXAS!!!
    <Table dataSource={data}>
        <Column title="AGÊNCIA"  dataIndex="AGENCIA" key="AGENCIA" render={(_: any, record: DataType) => (
        <Space size="middle">
          <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
      <Column title="BANCO"  dataIndex="BANCO" key="BANCO" render={(_: any, record: DataType) => (
        <Space size="large">
          <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
      <Column title="CONTA"  dataIndex="CONTA" key="CONTA" render={(_: any, record: DataType) => (
        <Space size="large">
        <Input bordered={false} placeholder=""  
          />
        </Space> 
      )}
      /> 
      <Column title="CONTA ERP "  dataIndex="CONTA_ERP" key="CONTA_ERP" render={(_: any, record: DataType) => (
        <Space size="large">
          <Select   
      defaultValue="Selecione"
      style={{ 
        width: 250 }}
      onChange={handleChange}
      options={[
        {
          value: 'null',
          label: 'Null',
        }
      ]}
    />
        </Space> 
      )}
      /> 
      <Column title="SALVAR"  dataIndex="SALVAR" key="SALVAR" render={(_: any, record: DataType) => (
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
      <Column title="DELETAR"  dataIndex="DELETAR" key="DELETAR" render={(_: any, record: DataType) => (
        <Space size="large">
         <Button
            type="primary"
            icon={<DeleteOutlined />}
            loading={loadings[1]}
             onClick={() => enterLoading(1)}
           />
        </Space> 
      )}
      /> 
     
  </Table>
    */}
          </div>
        </Card>
      </article>
    </Content>
  )
}
