import { DashboardInfo } from "@context/types/dashboard";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";

type OpeSyntheticProps = {
  opeSyntheticList: DashboardInfo["pending_synthetic_operator"];
};

export function OpeSynthetic({ opeSyntheticList }: OpeSyntheticProps) {
  interface OpeSynthecticData {
    key: number;
    nome: string;
    valor: number;
    nrParcelas: number;
  }

  const opeSyntheticColumns: ColumnsType<OpeSynthecticData> = [
    {
      title: "NOME",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "VALOR",
      dataIndex: "valor",
      key: "valor",
    },
    {
      title: "NR. PARCELAS",
      dataIndex: "nrParcelas",
      key: "nrParcelas",
    },
  ];

  const opeSyntheticData: OpeSynthecticData[] = opeSyntheticList.map(
    (opeSynthetic, index) => ({
      key: index,
      nome: opeSynthetic.enterprise,
      valor: opeSynthetic.sale_amount,
      nrParcelas: opeSynthetic.instalments,
    })
  );
  return (
    <div>
      <Table columns={opeSyntheticColumns} dataSource={opeSyntheticData} />
    </div>
  );
}

type OpeAnalyticProps = {
  opeAnalyticList: DashboardInfo["pending_analytic_operator"];
};

export function OpeAnalytic({ opeAnalyticList }: OpeAnalyticProps) {
  interface OpeAnalyticData {
    data: string;
    key: number;
    nome: string;
    vrVendas: number;
    vrConciliado: number;
    numPar: number;
    parConc: number;
    pendentes: number;
    acoes: string;
  }
  const opeAnalyticColumns: ColumnsType<OpeAnalyticData> = [
    {
      title: "DATA",
      dataIndex: "data",
      key: "data",
    },
    {
      title: "NOME",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "VR. VENDAS",
      dataIndex: "vrVendas",
      key: "vrVendas",
    },
    {
      title: "VR. CONCILIADO",
      dataIndex: "vrConciliado",
      key: "vrConciliado",
    },
    {
      title: "NUM. PAR.",
      dataIndex: "numPar",
      key: "numPar",
    },
    {
      title: "PAR. CONC",
      dataIndex: "parConc",
      key: "parConc",
    },
    {
      title: "PENDENTES",
      dataIndex: "pendentes",
      key: "pendentes",
    },
    {
      title: "AÇÕES",
      dataIndex: "acoes",
      key: "acoes",
    },
  ];

  const opeAnalyticData: OpeAnalyticData[] = opeAnalyticList.map(
    (opeAnalytic, index) => ({
      key: index,
      data: opeAnalytic.dt_sale,
      nome: opeAnalytic.enterprise,
      vrVendas: opeAnalytic.sale_amount,
      vrConciliado: opeAnalytic.sale_unreconciled,
      numPar: opeAnalytic.instalments,
      parConc: opeAnalytic.instalments_reconciled,
      pendentes: opeAnalytic.instalments_unreconciled,
      acoes: "",
    })
  );
  return <Table columns={opeAnalyticColumns} dataSource={opeAnalyticData} />;
}
