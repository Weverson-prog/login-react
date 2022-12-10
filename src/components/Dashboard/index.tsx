import { useAuth } from "../../context/AuthProvider/useAuth";
import { getCard } from "../../context/AuthProvider/getDash";
import {
  
  IAuthProvider,
  IUser,
  Root,
} from "../../../src/context/AuthProvider/types";
import {
  LoginRequest,
  setUserLocalStorage,
  getUserLocalStorage,
} from "../../../src/context/AuthProvider/util";
import {
  Affix,
  Card,
  Statistic,
  Col,
  Row,
  Menu,
  Layout,
  MenuProps,
  Input,
  Space,
  Button,
  Divider,
  notification,
  Table,
  Tag,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  LogoutOutlined,
  MailOutlined,
  SettingOutlined,
  CloudServerOutlined,
  BankOutlined,
  DollarCircleOutlined,
  FileSearchOutlined,
  RetweetOutlined,
  DashboardOutlined,
  HomeOutlined,
  BellOutlined,
  ArrowUpOutlined,
  AppstoreOutlined,
  MenuOutlined,
  PoweroffOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Chart } from "react-google-charts";

import "../../assets/css/styles.css";

import { NavLink, Navigate } from "react-router-dom";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import "../../assets/css/styles.css";
import "../../assets/css/reset.css";
import { Footer } from "antd/lib/layout/layout";
import type { NotificationPlacement } from "antd/es/notification";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { MenuItem } from "rc-menu";
import axios from "axios";

type MenuItem = Required<MenuProps>["items"][number];
const { Column, ColumnGroup } = Table;
interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}



function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("MN PRÁTICO", "sub1", null, [
    getItem(
      "CARTAO",
      "1",
      <NavLink to="/cartao" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "MARKETPLACE",
      "2",
      <NavLink to="/marketplace" style={{ marginLeft: "-25px" }}></NavLink>
    ),
  ]),

  getItem("BLUK", "sub2", <MailOutlined />, [
    getItem(
      "ADMINISTRADOR",
      "3",
      <NavLink to="/administrador" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "REDEFINIR SENHA",
      "4",
      <NavLink to="/redefinir_senha" style={{ marginLeft: "-25px" }}></NavLink>
    ),
  ]),

  getItem(
    "HOME",
    null,
    <NavLink to="/home" style={{ marginLeft: "0" }}>
      {" "}
      <HomeOutlined />
    </NavLink>
  ),

  getItem(
    "CONCILIAÇÃO",
    null,
    <NavLink to="/conciliacao" style={{ marginLeft: "0" }}>
      {" "}
      <RetweetOutlined />
    </NavLink>
  ),

  getItem("CADASTROS", "sub3", <FileSearchOutlined />, [
    getItem(
      "CONFIG. OPERADORAS",
      "5",
      <NavLink
        to="/config_operadoras"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "USUÁRIOS",
      "6",
      <NavLink to="/usuarios" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "TAXAS",
      "7",
      <NavLink to="/taxas" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "CONTRATOS",
      "8",
      <NavLink to="/contratos" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "TERMINAIS",
      "9",
      <NavLink to="/terminais" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "EMPRESAS",
      "10",
      <NavLink to="/empresas" style={{ marginLeft: "-25px" }}></NavLink>
    ),
  ]),

  getItem("VENDAS", "sub4", <DollarCircleOutlined />, [
    getItem(
      "VENDAS POR FILIAL",
      "11",
      <NavLink
        to="/vendas_por_filial"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "VENDAS POR CONTRATO",
      "12",
      <NavLink
        to="/vendas_por_contrato"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "VENDAS NÃO EXPOR",
      "13",
      <NavLink to="/vendas_nao_expor" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "VENDAS CANCELADAS",
      "14",
      <NavLink
        to="/vendas_canceladas"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
  ]),

  getItem("RECEBIMENTOS", "sub5", <BankOutlined />, [
    getItem(
      "SAQUE",
      "15",
      <NavLink to="/saque" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "RECEBIVEIS",
      "16",
      <NavLink to="/recebiveis" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "CALENDÁRIO DE RECEBIMENTO",
      "17",
      <NavLink
        to="/calendario_de_recebimento"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "BAIXAS NSU",
      "18",
      <NavLink to="/baixas_nsu" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "CRÉDITO EM CONTA",
      "19",
      <NavLink to="/credito_em_conta" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "TAXAS ADMINISTRATIVAS",
      "20",
      <NavLink
        to="/taxas_administrativas"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "RECEBIMENTOS BANDEIRAS",
      "21",
      <NavLink
        to="/recebimentos_bandeiras"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "ANTECIPAÇÕES",
      "22",
      <NavLink to="/antecipacoes" style={{ marginLeft: "-25px" }}></NavLink>
    ),
  ]),

  getItem(
    "DASHBOARD",
    null,
    <NavLink to="/dashboard" style={{ marginLeft: "0" }}>
      {" "}
      <DashboardOutlined />
    </NavLink>
  ),

  getItem("ERP", "sub6", <CloudServerOutlined />, [
    getItem(
      "INCLUSÃO DE AJUSTE",
      "23",
      <NavLink
        to="/inclusao_de_ajuste"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "BAIXA TÍTULOS RECEBER",
      "24",
      <NavLink
        to="/baixa_titulos_receber"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "INCLUSÃO DE TÍTULOS",
      "25",
      <NavLink
        to="/inclusao_de_titulos"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
  ]),

  getItem("OUTROS", "sub7", <SettingOutlined />, [
    getItem(
      "UPLOAD DE ARQUIVOS",
      "26",
      <NavLink
        to="/upload_de_arquivos"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "MENSAGENS",
      "27",
      <NavLink to="/mensagens" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "EXCLUIR CONCILIADOS",
      "28",
      <NavLink
        to="/excluir_conciliados"
        style={{ marginLeft: "-25px" }}
      ></NavLink>
    ),
    getItem(
      "VENDAS POR MÊS",
      "29",
      <NavLink to="/vendas_por_mes" style={{ marginLeft: "-25px" }}></NavLink>
    ),
  ]),

  getItem(
    "LOGOUT",
    null,
    <NavLink to="/login" style={{ marginLeft: "0", marginBottom: "7px" }}>
      {" "}
      <LogoutOutlined />
    </NavLink>
  ),
];

export const DASHBOARD = ({
  children,
}: {
  children: JSX.Element;
  start_date: string;
  final_date: string;
}) => {
  const auth = useAuth();

  const [dados, setDados]   = useState<Root>()
  /* importando dados*/
 

  useEffect(() => {
    async function getDados() {
      setDados(await getCard())
    }
    getDados()
  }, [])
console.log(dados)



  const { Header, Sider, Content } = Layout;

  const openNotification = (placement: NotificationPlacement) => {
    notification.info({
      message: `Notificação `,
      description: "Sua notificação personalizada aqui!!!",
      placement,
    });
  };
  const [size, setSize] = useState<SizeType>("large");

  const [collapsed, setCollapsed] = useState(false);

  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  /*tabela*/

  const data: DataType[] = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  /*fim tabela*/

  /*grafico pizza*/

  const data0 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  /*grafico pizza*/

  /*graficobar*/
  const data1 = [
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];

  const options1 = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "" } },
  };

      return (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{
              backgroundImage: "linear-gradient( #fff, #fff )",
            }}
          >
            <div
              className="logo"
              style={{
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                  "url(" +
                  "https://lh3.googleusercontent.com/pw/AL9nZEWUxTUNlLTWhP9d2dyoKpz6ZnF1EWfGTrmAPDeo5893BvPjV9kXY7V72ZmZ02VAGI2KZnrDiqErIjwLfYB8CO49IA_z9XukMOfW2shVEpUParcLjRtuDjgMqsN6oIBxlv7ctt-fkETdJEvRPZNcB2qV=w100-h71-no?authuser=0" +
                  ")",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout className="site-layout">
            <Row>
              <Col xs={24}>
                <Header
                  className="site-layout-background"
                  style={{
                    display: "block",
                    background: "#1b71da",
                    backgroundImage:
                      "linear-gradient(to left,#1b71da, #3c89e3, #3c89e3, #5da0ed, #7eb8f6, #7eb8f6, #9fcfff, #9fcfff, #9fcfff,  #fff)",
                  }}
                >
                  <Space>
                    <h2
                      style={{
                        textAlign: "left",
                        marginLeft: "0.01vw",
                        marginTop: "10px",
                        color: "#5da0ed",
                        WebkitTextStroke: "1px",
                        WebkitTextStrokeColor: "#5da0ed",
                      }}
                    >
                      DASHBOARD
                    </h2>
                    <Button
                      className="notification-button"
                      type="primary"
                      shape="round"
                      onClick={() => openNotification("bottomRight")}
                      icon={<BellOutlined />}
                      size={size}
                      style={{ textAlign: "left" }}
                    ></Button>
                  </Space>
                </Header>
              </Col>
            </Row>
            <Content>
              {" "}
              {/*cards*/}
              <div className="site-statistic-demo-card">
                <Row gutter={16}>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Vendas Procesadas"
                        value={dados?.card[0].sale_amount}
                        precision={2}
                        valueStyle={{ color: "#3f8600" }}
                        prefix={''}
                        suffix=""
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Conciliadas Mês"
                        value={dados?.card[0].reconciled_percentage}
                        precision={2}
                        valueStyle={{ color: "#green" }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Conciliadas Manual"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: "#cf1322" }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Baixas Processadas"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: "#cf1322" }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Parcelas Pendente OPE"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: "#cf1322" }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Parcelas Pendente ERP"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: "#cf1322" }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            </Content>{" "}
            {/*fim cards*/}
            <Content className="content-pizza-tabela">
              {" "}
              {/*grafico pizza e tabela*/}
              <Row>
                <Col xs={24}>
                  <div className="tabela">
                    {" "}
                    {/*tabela*/}
                    <Table dataSource={data}>
                      <ColumnGroup title="Name">
                        <Column
                          title="First Name"
                          dataIndex="firstName"
                          key="firstName"
                        />
                        <Column
                          title="Last Name"
                          dataIndex="lastName"
                          key="lastName"
                        />
                      </ColumnGroup>
                      <Column title="Age" dataIndex="age" key="age" />
                      <Column
                        title="Address"
                        dataIndex="address"
                        key="address"
                      />
                      <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={(tags: string[]) => (
                          <>
                            {tags.map((tag) => (
                              <Tag color="blue" key={tag}>
                                {tag}
                              </Tag>
                            ))}
                          </>
                        )}
                      />
                      <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: DataType) => (
                          <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                          </Space>
                        )}
                      />
                    </Table>
                  </div>
                  <div className="pizza">
                    {" "}
                    {/*pizza*/}
                    <Chart
                      chartType="PieChart"
                      data={data0}
                      options={options1}
                      width={"100%"}
                      height={"400px"}
                    />
                  </div>
                </Col>
              </Row>
            </Content>{" "}
            {/*fim grafico pizza e tabela*/}
            <Content>
              {" "}
              {/*grafico bar*/}
              <Row>
                <Col xs={24}>
                  <div>
                    <Chart
                      chartType="ComboChart"
                      width="100%"
                      height={"400px"}
                      data={data1}
                      options={options1}
                      chartLanguage="pt-Br"
                    />
                  </div>
                </Col>
              </Row>
            </Content>{" "}
            {/*fim grafico bar*/}
            <Row>
              <Col xs={24}>
                <Footer
                  style={{
                    height: "15px",
                    backgroundColor: "#add8e6",
                    backgroundImage:
                      "linear-gradient(to right,#1b71da, #3c89e3, #3c89e3, #5da0ed, #7eb8f6, #7eb8f6, #9fcfff,#9fcfff)",
                  }}
                >
                  <Row>
                    <Col flex="auto">
                      <h3
                        style={{
                          color: "#000",
                          textAlign: "right",
                          fontFamily: "arial",
                          fontSize: "14px",
                        }}
                      >
                        ⓒPratico 2022
                      </h3>
                    </Col>
                  </Row>
                </Footer>
              </Col>
            </Row>
          </Layout>
        </Layout>
      );
    

  return children;
};
