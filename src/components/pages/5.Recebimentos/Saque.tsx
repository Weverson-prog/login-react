import logo from "@assets/img/praticoLogo.png";
import type { DatePickerProps } from "antd";
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Input,
  Layout,
  Radio,
  Select,
  Space,
  Table,
} from "antd";

import type { CheckboxChangeEvent } from "antd/lib/checkbox";

export function Saque() {
  const { Content } = Layout;

  const { Search } = Input;

  const { Column } = Table;

  const onSearch = (value: string) => console.log(value);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  interface DataType {
    key: React.Key;
    OPERADORA: string;
    STATUS: string;
    CONFIG_BAIXAS: number;
    INCLUSAO_DE_AJUSTES: string;
    EMPRESA: string[];
  }

  const data: DataType[] = [
    {
      key: "1",
      OPERADORA: "",
      STATUS: "",
      CONFIG_BAIXAS: 32,
      INCLUSAO_DE_AJUSTES: "",
      EMPRESA: ["nice", "developer"],
    },
  ];

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  function mostrardiv() {
    let element = document.getElementById("showSaque");
    if (element?.style.display == "none") {
      element.style.display = "block";
    } else if (element?.style.display == "block") {
      element.style.display = "none";
    }
  }
  function mostrarsimples() {
    let element = document.getElementById("showSimples");
    if (element?.style.display == "") {
      element.style.display = "none";
    }
    console.log("alou aqui");
  }
  return (
    <Content
      className="site-layout-background"
      style={{
        backgroundColor: "#EFF2F5",
      }}
    >
      <article>
        <Card
          style={{
            backgroundColor: "#f0f5ff",
            margin: "20px 24px 0",
            overflow: "initial",
          }}
        >
          <div style={{ margin: "20px  0" }}>
            <Table pagination={false} dataSource={data}>
              <Column
                title="DATA INICIAL"
                dataIndex="DATA_INICIAL"
                key="DATA_INICIAL"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="DATA FINAL"
                dataIndex="DATA_FINAL"
                key="DATA_FINAL"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="CONTRATO"
                dataIndex="CONTRATO"
                key="CONTRATO"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null",
                        },
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="SAQUE "
                dataIndex="SAQUE"
                key="SAQUE"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null",
                        },
                      ]}
                    />
                  </Space>
                )}
              />
            </Table>
            {/*QUANDO CLICAR EM FILTRAR, MOSTRAR "AGRUPAR POR:"*/}
            <Table pagination={false} dataSource={data}>
              <Column
                title="AGRUPAR POR:"
                dataIndex="AGRUPAR_POR"
                key="AGRUPAR_POR"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Checkbox onChange={onChange}>DATA LANÇAMENTO</Checkbox>
                    <Checkbox onChange={onChange}>TIPO LAÇAMENTO</Checkbox>
                    <Checkbox onChange={onChange}>CONTRATO</Checkbox>
                    <br></br>
                    <Button
                      onClick={mostrardiv}
                      className="showSaque"
                      id="show-btn"
                      type="primary"
                      icon={"Filtrar"}
                      size="large"
                      style={{ width: 100 }}
                    />
                    <br></br>
                    <br></br>
                  </Space>
                )}
              />
            </Table>
            <div
              className="showSaque"
              id="showSaque"
              style={{ display: "none" }}
            >
              <Table pagination={false} dataSource={data}>
                <Column
                  title="FORMATO DE EXIBIÇÃO:"
                  dataIndex="FORMATO_DE_EXIBIÇÃO"
                  key="FORMATO_DE_EXIBIÇÃO"
                  render={(_: any, record: DataType) => (
                    <Space size="middle">
                      <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">DETALHADO</Radio.Button>
                        <Radio.Button
                          id="show-btn"
                          className="showSimples"
                          onClick={mostrarsimples}
                          type={"primary"}
                          value="b"
                        >
                          SIMPLES
                        </Radio.Button>
                      </Radio.Group>
                    </Space>
                  )}
                />
              </Table>
              <br></br>

              <Search
                placeholder="Pesquisar"
                onSearch={onSearch}
                style={{ width: 200 }}
              />

              <br></br>
              <br></br>

              {/*QUANDO SELECIONADO O MODO "SIMPLES" DE EXIBIÇÃO, APENAS MOSTRAR AS OPÇÕES SELECIONADAS PELO USUARIO + O VALOR DO MESMO, CASO SEJA SELECIONADA A OPÇÃO "DETALHADO" MOSTRAR TODOS OS VALORES DENTRO DA TABELA.*/}

              <Table dataSource={data}>
                <div
                  className="showSimples"
                  id="showSimples"
                  style={{ display: "" }}
                >
                  <Column
                    title="DATA LANÇAMENTO"
                    dataIndex="DATA_LANÇAMENTO"
                    key="DATA_LANÇAMENTO"
                    render={(_: any, record: DataType) => (
                      <Space size="middle">
                        <Input bordered={false} placeholder="" />
                      </Space>
                    )}
                  />
                  <Column
                    title="TIPO DE LANÇAMENTO"
                    dataIndex="TIPO_DE_LANÇAMENTO"
                    key="TIPO_DE_LANÇAMENTO"
                    render={(_: any, record: DataType) => (
                      <Space size="large">
                        <Input bordered={false} placeholder="" />
                      </Space>
                    )}
                  />
                  <Column
                    title="CONTRATO"
                    dataIndex="CONTRATO"
                    key="CONTRATO"
                    render={(_: any, record: DataType) => (
                      <Space size="large">
                        <Input bordered={false} placeholder="" />
                      </Space>
                    )}
                  />
                  <Column
                    title="ID INTERNO"
                    dataIndex="ID_INTERNO"
                    key="ID_INTERNO"
                    render={(_: any, record: DataType) => (
                      <Space size="large">
                        <Input bordered={false} placeholder="" />
                      </Space>
                    )}
                  />
                  <Column
                    title="PARCELA"
                    dataIndex="PARCELA"
                    key="PARCELA"
                    render={(_: any, record: DataType) => (
                      <Space size="large">
                        <Input bordered={false} placeholder="" />
                      </Space>
                    )}
                  />
                </div>
                <Column
                  title="VALOR"
                  dataIndex="VALOR"
                  key="VALOR"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
              </Table>
            </div>
          </div>
        </Card>
      </article>
    </Content>
  );
}
