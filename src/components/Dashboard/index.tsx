import { useAuth } from "../../context/AuthProvider/useAuth";
import { getCard } from "../../context/AuthProvider/getDash";
import {Root,} from "../../../src/context/AuthProvider/types";
import {Card,Statistic,Col,Row,Menu,Layout,MenuProps,Space,	Button,	notification,Table,} from "antd";
import React, { useEffect, useState } from "react";
import {LogoutOutlined,MailOutlined,SettingOutlined,CloudServerOutlined,BankOutlined,DollarCircleOutlined,FileSearchOutlined,RetweetOutlined,DashboardOutlined,HomeOutlined,BellOutlined
} from "@ant-design/icons";
import { Chart } from "react-google-charts";
import "../../assets/css/styles.css";
import { NavLink } from "react-router-dom";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import "../../assets/css/styles.css";
import "../../assets/css/reset.css";
import { Footer } from "antd/lib/layout/layout";
import type { NotificationPlacement } from "antd/es/notification";
import { MenuItem } from "rc-menu";

type MenuItem = Required<MenuProps>["items"][number];
const { Column, ColumnGroup } = Table;
interface DataType {
	key: React.Key;
	firstName: string | undefined;
	lastName: number | undefined;
	address: any;
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

	const [dados, setDados] = useState<Root>()
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
			firstName: dados?.sales_operators_brand[0].brand,
			lastName: dados?.sales_operators_brand[0].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[0].brand+".png"} style={{width: "41px"}}/>,
			
		},
		{
			key: "2",
			firstName: dados?.sales_operators_brand[1].brand,
			lastName: dados?.sales_operators_brand[1].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[1].brand+".png"} style={{width: "41px"}} />,
		},
		{
			key: "3",
			firstName: dados?.sales_operators_brand[2].brand,
			lastName: dados?.sales_operators_brand[2].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[2].brand+".png"} style={{width: "41px"}}/>,
		},
		{
			key: "4",
			firstName: dados?.sales_operators_brand[3].brand,
			lastName: dados?.sales_operators_brand[3].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[3].brand+".png"} style={{width: "41px"}}/>,
		},
		{
			key: "5",
			firstName: dados?.sales_operators_brand[4].brand,
			lastName: dados?.sales_operators_brand[4].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[4].brand+".png"} style={{width: "41px"}}/>,
		},
		{
			key: "6",
			firstName: dados?.sales_operators_brand[5].brand,
			lastName: dados?.sales_operators_brand[5].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[5].brand+".png"} style={{width: "41px"}}/>,
		},
		{
			key: "7",
			firstName: dados?.sales_operators_brand[6].brand,
			lastName: dados?.sales_operators_brand[6].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[6].brand+".png"} style={{width: "41px"}}/>,
		},
		{
			key: "8",
			firstName: dados?.sales_operators_brand[7].brand,
			lastName: dados?.sales_operators_brand[7].amount,
			address: <img src={"/src/assets/img/flags/flags/flags/"+dados?.sales_operators_brand[7].brand+".png"} style={{width: "41px"}}/>,
		},


	];

	/*fim tabela*/

	/*grafico pizza*/
	const data0 = [
		["Task", "Hours per Day"],
		[dados?.sales_operators_operator[0].operator, dados?.sales_operators_operator[0].amount],
		[dados?.sales_operators_operator[1].operator, dados?.sales_operators_operator[1].amount],
		
	];
	/*grafico pizza*/
 
	/*graficobar*/
	const data1 =  [ 
	 
		[
			"dias",
			"Vendas ERP ",
			"Conciliadas ERP",
			"Vendas operadoas ",
			"Conciliadas operadoas"
		]
	]

	const rows = dados?dados.sales_erp_daily.map((value, index) => {
		return [
			value.dt_sale.substring(value.dt_sale.length-2, 10),
			value.amount, 
			dados.reconciled_erp_daily[index].amount ,
			dados.sales_operators_daily[index].amount,
			dados.reconciled_operators_daily[index].amount
		]
	}):[]
	const teste = [0,31]
	const data2 = [...data1, ...rows.slice(...teste)]

	
	console.log(data2) 

	const options1 = {
		title: "Adquirente - Vendas por Operadora",
		vAxis: { title: "valores" },
		hAxis: { title: "dias" },
		seriesType: "bars",
		series: { 25: { type: "" } },
	};

	const options2 = {
		title: "Vendas no período	",
		vAxis: { title: "valores" },
		hAxis: { title: "dias" },
		colors: ['#0000FF', '#00CC1B', '#4DBEFF', '#008011'],
		seriesType: "bars",
		series: { 30: { type: "" } },
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
			
					<Card className="main-cardsmin" style={{ border: "none" }}>
						{" "}
						{/*cards*/}
						<div className="site-statistic-demo-card">
							<Row gutter={16}>
								<Col span={8}>
									<Card style={{ alignContent: 'center', overflow: 'initial' }}>
										<Statistic
											title="Vendas Processadas"
											value={dados?.card[0].sale_amount}
											precision={2}
											valueStyle={{ color: "#3f8600" }}
											prefix={''}
											suffix=""
										/>
									</Card>
								</Col>
								<Col span={8}>
									<Card>
										<Statistic
											title="Conciliadas Mês"
											value={dados?.card[0].reconciled_percentage}
											precision={2}
											valueStyle={{ color: "#3f8600" }}
											prefix={''}
											suffix="%"
										/>
									</Card>
								</Col>
								<Col span={8}>
									<Card>
										<Statistic
											title="Conciliadas Manual"
											value={dados?.card[0].manual_reconciled}
											precision={2}
											valueStyle={{ color: "#3f8600" }}
											prefix={''}
											suffix="%"
										/>
									</Card>
								</Col>
								<Col span={8}>
									<Card>
										<Statistic
											title="Baixas Processadas"
											value={dados?.card[0].net_received}
											precision={2}
											valueStyle={{ color: "#3f8600" }}
											prefix={''}
											suffix="%"
										/>
									</Card>
								</Col>

								<Col span={8}>
									<Card>
										<Statistic
											title="Parcelas Pendente OPE"
											value={dados?.card[0].pending_operator_reconciled}
											precision={2}
											valueStyle={{ color: "#3f8600" }}
											prefix={''}
											suffix=""
										/>
									</Card>
								</Col>
								<Col span={8}>
									<Card>
										<Statistic
											title="Parcelas Pendente ERP"
											value={dados?.card[0].pending_erp_reconciled}
											precision={2}
											valueStyle={{ color: "#3f8600" }}
											prefix={''}
											suffix=""
										/>
									</Card>
								</Col>
							</Row>
						</div>
					</Card>
				</Content>{" "}
				{/*fim cards*/}


				<Col>
					<Card className="table-pizza"
						style={{
							width: "100%", display: "flex", flexDirection: "row", border: "none",
							alignItems: "center", justifyContent: "space-between", margin: "0", marginBottom: "-400px",
						}}>
						<Content className="content-pizza-tabela">
							{" "}
							{/*grafico pizza e tabela*/}

							<Row>
								<Col xs={24}>
									<Card className="table" style={{ width: "201.2%", margin: "0", padding: "0", }}>
										<div className="tabela">
											{" "}

											{/*tabela*/}
											<Table dataSource={data}>
												<ColumnGroup title="Vendas por Bandeira">
													<Column
														dataIndex="address"
														key="address"
													/>
													<Column
														dataIndex="firstName"
														key="firstName"
													/>
													<Column
														dataIndex="lastName"
														key="lastName"
													/>
												</ColumnGroup>

												


											</Table>
										</div>
									</Card>
									
								</Col>
							</Row>
						</Content>{" "}
						{/*fim grafico pizza e tabela*/}
						<Card className="pizza-main" style={{ width: "100%",  position: "relative", bottom: "600px", left: "1080px", border: "none" }}>
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
							</Card>
					</Card>
				</Col>

				<Card style={{ border: "none", marginLeft: "-75px", marginTop: "-65px" }}>
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
										data={data2}
										options={options2}
										chartLanguage="pt-Br"
									/>
								</div>
							</Col>
						</Row>
					</Content>{" "}
					{/*fim grafico bar*/}
				</Card>
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

