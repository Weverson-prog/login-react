import { Loading } from "@components/layout"
import { useAuth } from "@context/AuthProvider"
import { getDashboardInfo } from "@services/api"
import { useQuery } from "@tanstack/react-query"
import { Button, Card, Col, Layout, Row, Statistic, Table } from "antd"
import Chart from "react-google-charts"
import { ErpAnalytic, ErpSynthetic } from "./ErpList"
import { OpeAnalytic, OpeSynthetic } from "./OpeList"
import React from 'react';
import { DatePicker, Space, } from 'antd';

interface DataType {
  key: React.Key
  DataInicial: string
  Operadora: string
  Contrato: string
  Emrpesa: string
  NSU: string
}
interface CardSalesData {
  key: React.Key
  cardIcon: JSX.Element
  cardBrand: string
  salesAmount: string
}

export function Dashboard() {
  const { user } = useAuth()
  const { Content } = Layout
  const { Column, ColumnGroup } = Table

  const { RangePicker } = DatePicker;

  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboardInfo(user?.token!),
    onSuccess: data => console.log(data)
  })

  const data1: DataType[] = [
    {
      key: "1",
      DataInicial: "",
      Operadora: "",
      Contrato: "",
      Emrpesa: "",
      NSU: ""
    }
  ]

  if (isLoading || !data) return <Loading />

  if (error) {
    return (
      <Content>
        <Card>
          <h1>Erro ao carregar dados</h1>
        </Card>
      </Content>
    )
  }




  const CardInfoGridComponent = () => {
    const cardSalesColumns = [
      { title: "Vendas Processadas", value: data.card[0].sale_amount, precision: 2, valueStyle: { color: "#3f8600" } },
      {
        title: "Conciliadas Mês",
        value: data.card[0].reconciled_percentage,
        precision: 2,
        valueStyle: { color: "#3f8600" },
        suffix: "%"
      },
      {
        title: "Conciliadas Manual",
        value: data.card[0].manual_reconciled,
        precision: 2,
        valueStyle: { color: "#3f8600" },
        suffix: "%"
      },
      {
        title: "Baixas Processadas",
        value: data.card[0].net_received,
        precision: 2,
        valueStyle: { color: "#3f8600" },
        suffix: "%"
      },
      {
        title: "Parcelas Pendente OPE",
        value: data.card[0].pending_operator_reconciled,
        precision: 2,
        valueStyle: { color: "#3f8600" }
      },
      {
        title: "Parcelas Pendente ERP",
        value: data.card[0].pending_erp_reconciled,
        precision: 2,
        valueStyle: { color: "#3f8600" }
      }
    ]

    function mostrardiv() {
      let element = document.getElementById("filter");
      if (element?.style.display == "none") {
        console.log("estou aqui");
        element.style.display = "block";
      } else if (element?.style.display == "block") {
        console.log("alou aqui");
        element.style.display = "none";
      }
    }

    return (


      <>


        <div id="filter" style={{
          marginLeft: "130vh", paddingBottom: "15px", display: "block",}}>
          {/*Filtro de data, incia aqui */}
          <Table style={{ marginLeft: "-129vh", marginBottom: '5px', display: "block", }} pagination={false} dataSource={data1}>
            <Column

              dataIndex="DataInicial"
              key="DataInicial"
              render={(_: any, record: DataType) => (
                <Space direction="vertical" size={12} style={{ width: 216, border: 'none', }}>
                  <RangePicker />
                </Space>
              )} />
          </Table>
          <div>
            <Button style={{
              marginLeft: "-110vh",  tableLayout: "fixed", }} type="primary">
              <a>Buscar</a>
            </Button>
          </div>
        </div>

        <Button
          onClick={mostrardiv}
          id="show-btn"
          type="primary"
          icon={"Filtrar"}
          size="large"
          style={{ width: 100, marginLeft: "160vh", marginBottom: "15px" }}
        />

        {
          cardSalesColumns.map(({ title, value, precision, valueStyle, suffix }, index) => (
            <Col span={8} key={index}>
              <Card style={{ marginTop: index > 2 ? "15px" : "0px" }}>
                <Statistic title={title} value={value} precision={precision} valueStyle={valueStyle} suffix={suffix} />
              </Card>
            </Col>
          ))
        }
      </>


    )
  }

  const CardSalesByFlagsComponent = () => {
    const cardSalesData: CardSalesData[] = data.sales_operators_brand.map((card, index) => ({
      key: index,
      cardBrand: card.brand,
      salesAmount: card.amount.toFixed(2),
      cardIcon: (
        <img
          src={"/src/assets/img/flags/flags/flags/" + card.brand + ".png"}
          alt={card.brand}
          style={{ width: "40px" }}
        />
      )
    }))

    return (
      <Card title="Vendas por bandeira">
        {/* Make the width of the table item to fit it size */}
        <Table pagination={false} showHeader={false} dataSource={cardSalesData}>
          <Column dataIndex="cardIcon" key="cardIcon" />
          <Column dataIndex="cardBrand" key="cardBrand" />
          <Column dataIndex="salesAmount" key="salesAmount" />
        </Table>
      </Card>
    )
  }

  const PieChartComponent = () => {
    const pieChartData = [
      ["Task", "Hours per Day"],
      ...data.sales_operators_operator.map((value, index) => [value.operator, value.amount])
    ]
    return (
      <Chart
        chartType="PieChart"
        data={pieChartData}
        options={{
          title: "Adquirente - Vendas por Operadora",
          width: 600,
          height: 600,
          is3D: true
        }}
        height={"100%"}
        width={"100%"}
        style={{
          width: "100%",
          height: "100%",
          marginLeft: "-25px",
          marginRight: "25px",
          border: "none",
          flex: "1 1 100px",
          tableLayout: "fixed"
        }}
      />
    )
  }


  const BarChartComponent = () => {
    const columnChartData = [
      ["dias", "Vendas ERP ", "Conciliadas ERP", "Vendas operadoas ", "Conciliadas operadoas"],
      ...data.sales_erp_daily.map((value, index) => {
        return [
          value.dt_sale.substring(value.dt_sale.length - 2, 10),
          value.amount,
          data.reconciled_erp_daily[index].amount,
          data.sales_operators_daily[index].amount,
          data.reconciled_operators_daily[index].amount
        ]
      })
    ]
    return (
      <Chart
        chartType="ComboChart"
        width="100%"
        height={"400px"}
        data={columnChartData}
        options={{
          title: "Vendas no período",
          colors: ["#0000FF", "#00CC1B", "#4DBEFF", "#008011"],
          seriesType: "bars",
          series: { 30: { type: "" } }
        }}
        chartLanguage="pt-Br"
      />
    )
  }

  return (
    <Content>
      <Card style={{ margin: "16px" }}>
        {/*cards*/}
        <Row gutter={16}>
          <CardInfoGridComponent />
        </Row>
        {/*fim cards*/}
      </Card>
      <Content
        style={{
          background: "#fff",
          display: "flex",
          flexWrap: "wrap",
          gridTemplateColumns: "auto auto",
          gridRowGap: "20px",
          gridColumnGap: "5px",
          justifyContent: "space-between",
          marginBottom: "65px",
          paddingRight: "80px"
        }}
      >
        {/*grafico pizza e tabela*/}
        <Row>
          <Col xs={24}>
            <Card
              className="table-main"
              style={{
                width: "200%",
                height: "100%",
                marginLeft: "25px",
                marginRight: "50px",
                flex: "1 1 100px",
                tableLayout: "fixed"
              }}
            >
              <div className="tabela">
                {/*tabela*/}
                <CardSalesByFlagsComponent />
              </div>
            </Card>
          </Col>
        </Row>
        {/*fim grafico pizza e tabela*/}
        <Row>
          <Col xs={24}>
            <Card
              className="pizza-main"
              style={{
                width: "100%",
                height: "100%",
                marginLeft: "-25px",
                marginRight: "25px",
                border: "none",
                flex: "1 1 100px",
                tableLayout: "fixed"
              }}
            >
              {/*pizza*/}
              <PieChartComponent />
            </Card>
          </Col>
        </Row>
      </Content>
      <Card style={{ margin: "16px" }}>
        {/*grafico bar*/}
        <Content>
          <Row>
            <Col xs={24}>
              <BarChartComponent />
            </Col>
          </Row>
        </Content>
      </Card>
      {/*fim grafico bar*/}
      {/* Pendentes OPE */}
      <Card style={{ margin: "16px" }}>
        <Card title={"PENDENTES DE CONCILIALÇÃO (OPE)"}>
          <OpeSynthetic opeSyntheticList={data.pending_synthetic_operator} />
        </Card>
        <Card title={"PENDENTES DE CONCILIALÇÃO DETALHADA (OPE)"} style={{ marginTop: "20px" }}>
          <OpeAnalytic opeAnalyticList={data.pending_analytic_operator} />
        </Card>
      </Card>
      {/* Pendentes OPE */}
      {/* Pendentes ERP */}
      <Card style={{ margin: "16px" }}>
        <Card title={"PENDENTES DE CONCILIALÇÃO (ERP)"}>
          <ErpSynthetic erpSyntheticList={data.pending_synthetic_erp} />
        </Card>
        <Card
          title={"PENDENTES DE CONCILIALÇÃO DETALHADA (ERP)"}
          style={{
            marginTop: "20px"
          }}
        >
          <ErpAnalytic erpAnalyticList={data.pending_analytic_erp} />
        </Card>
      </Card>
      {/* Pendentes ERP */}
    </Content>
  )
}
