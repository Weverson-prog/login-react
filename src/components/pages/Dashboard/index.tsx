import { LoadingOutlined } from "@ant-design/icons";
import { Card, Col, Layout, Row, Statistic, Table } from "antd";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { Root } from "../../../context/AuthProvider/types";
import { getCard } from "../../../context/AuthProvider/getDash";
import { OpeAnalytic, OpeSynthetic } from "./OpeList";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface CardSalesData {
  key: React.Key;
  cardIcon: JSX.Element;
  cardBrand: string;
  salesAmount: string;
}

export function Dashboard() {
  const { Content } = Layout;
  const [dados, setDados] = useState<Root>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDados() {
      console.log("Fetching data...");
      const response = await getCard();
      if (!response) {
        return;
      }
      // After fetching the response, add a createdAt property to it.
      const data = { ...response, createdAt: new Date() };
      setDados(data);
      // cache the response
      localStorage.setItem("dashboard", JSON.stringify(data));
      setLoading(false);
    }
    // If localStorage has the response, check if it is less than 5 minutes old, if so, use it, otherwise, fetch new data
    const cachedResponse = localStorage.getItem("dashboard");
    if (cachedResponse) {
      const parsedResponse = JSON.parse(cachedResponse);
      const fiveMinutesAgo = new Date().getTime() - 5 * 60 * 1000;
      if (new Date(parsedResponse.createdAt).getTime() > fiveMinutesAgo) {
        console.log("Using cached data...");
        setDados(parsedResponse);
        setLoading(false);
        return;
      }
    }
    getDados();
  }, []);

  if (loading || !dados) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#4DBEFF",
          backgroundColor: "#F0F8FF",
          textAlign: "center",
        }}
      >
        <LoadingOutlined spin style={{ fontSize: 128 }} />
        <h1 style={{ marginTop: 32 }}>Carregando...</h1>
      </div>
    );
  }

  console.log(dados);

  const cardSalesData: CardSalesData[] = dados.sales_operators_brand.map(
    (card, index) => {
      return {
        key: index,
        cardBrand: card.brand,
        salesAmount: card.amount.toFixed(2),
        cardIcon: (
          <img
            src={"/src/assets/img/flags/flags/flags/" + card.brand + ".png"}
            style={{ width: "41px" }}
          />
        ),
      };
    }
  );

  const pieChartOptions = {
    title: "Adquirente - Vendas por Operadora",
    vAxis: { title: "valores" },
    hAxis: { title: "dias" },
    seriesType: "bars",
    series: { 25: { type: "" } },
  };

  const columnChartOptions = {
    title: "Vendas no período	",
    vAxis: { title: "valores" },
    hAxis: { title: "dias" },
    colors: ["#0000FF", "#00CC1B", "#4DBEFF", "#008011"],
    seriesType: "bars",
    series: { 30: { type: "" } },
  };

  const pieChartData = [
    ["Task", "Hours per Day"],
    [
      dados?.sales_operators_operator[0].operator,
      dados?.sales_operators_operator[0].amount,
    ],
    [
      dados?.sales_operators_operator[1].operator,
      dados?.sales_operators_operator[1].amount,
    ],
  ];
  const columnChartData = [
    [
      "dias",
      "Vendas ERP ",
      "Conciliadas ERP",
      "Vendas operadoas ",
      "Conciliadas operadoas",
    ],
    ...dados.sales_erp_daily.map((value, index) => {
      return [
        value.dt_sale.substring(value.dt_sale.length - 2, 10),
        value.amount,
        dados.reconciled_erp_daily[index].amount,
        dados.sales_operators_daily[index].amount,
        dados.reconciled_operators_daily[index].amount,
      ];
    }),
  ];

  return (
    <Content>
      <Card className="main-cardsmin" style={{ border: "none" }}>
        {/*cards*/}
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={8}>
              <Card style={{ alignContent: "center", overflow: "initial" }}>
                <Statistic
                  title="Vendas Processadas"
                  value={dados?.card[0].sale_amount}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={""}
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
                  prefix={""}
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
                  prefix={""}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ marginTop: "15px" }}>
                <Statistic
                  title="Baixas Processadas"
                  value={dados?.card[0].net_received}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={""}
                  suffix="%"
                />
              </Card>
            </Col>

            <Col span={8}>
              <Card style={{ marginTop: "15px" }}>
                <Statistic
                  title="Parcelas Pendente OPE"
                  value={dados?.card[0].pending_operator_reconciled}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={""}
                  suffix=""
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ marginTop: "15px" }}>
                <Statistic
                  title="Parcelas Pendente ERP"
                  value={dados?.card[0].pending_erp_reconciled}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={""}
                  suffix=""
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
      {/*fim cards*/}
      <Col>
        <Card
          className="table-pizza"
          style={{
            marginTop: "-22px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            border: "none",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0",
            marginBottom: "-400px",
          }}
        >
          <Content className="content-pizza-tabela">
            {" "}
            {/*grafico pizza e tabela*/}
            <Row>
              <Col xs={24}>
                <Card
                  className="table"
                  style={{ width: "201.2%", margin: "0", padding: "0" }}
                >
                  <div className="tabela">
                    {" "}
                    {/*tabela*/}
                    <Table dataSource={cardSalesData}>
                      <ColumnGroup title="Vendas por Bandeira">
                        <Column dataIndex="cardIcon" key="cardIcon" />
                        <Column dataIndex="cardBrand" key="cardBrand" />
                        <Column dataIndex="salesAmount" key="salesAmount" />
                      </ColumnGroup>
                    </Table>
                  </div>
                </Card>
              </Col>
            </Row>
          </Content>{" "}
          {/*fim grafico pizza e tabela*/}
          <Card
            className="pizza-main"
            style={{
              width: "100%",
              position: "relative",
              bottom: "600px",
              left: "1080px",
              border: "none",
              marginTop: "-5px",
            }}
          >
            <div className="pizza">
              {" "}
              {/*pizza*/}
              <Chart
                chartType="PieChart"
                data={pieChartData}
                options={pieChartOptions}
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
                  data={columnChartData}
                  options={columnChartOptions}
                  chartLanguage="pt-Br"
                />
              </div>
            </Col>
          </Row>
        </Content>{" "}
        {/*fim grafico bar*/}
      </Card>
      <Card>
        <Card
          title={"PENDENTES DE CONCILIALÇÃO (OPE)"}
          style={{ alignContent: "center", overflow: "initial" }}
        >
          <OpeSynthetic opeSyntheticList={dados.pending_synthetic_operator} />
        </Card>
        <Card
          title={"PENDENTES DE CONCILIALÇÃO (OPE)"}
          style={{ alignContent: "center", overflow: "initial" }}
        >
          <OpeAnalytic opeAnalyticList={dados.pending_analytic_operator} />
        </Card>
      </Card>
    </Content>
  );
}
