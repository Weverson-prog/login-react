import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
    PendingAnalyticErp,
    PendingSyntheticErp,
} from "../../../context/AuthProvider/types";

type ErpSyntheticProps = {
    erpSyntheticList: PendingSyntheticErp[];
};

export function ErpSynthetic({ erpSyntheticList }: ErpSyntheticProps) {
    interface ErpSynthecticData {
        key: number;
        nome: string;
        valor: number;
        nrParcelas: number;
    }

    const erpSyntheticColumns: ColumnsType<ErpSynthecticData> = [
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

    const erpSyntheticData: ErpSynthecticData[] = erpSyntheticList.map(
        (erpSynthetic, index) => ({
            key: index,
            nome: erpSynthetic.enterprise,
            valor: erpSynthetic.sale_amount,
            nrParcelas: erpSynthetic.instalments,
        })
    );
    return (
        <div>
            <Table columns={erpSyntheticColumns} dataSource={erpSyntheticData} />
        </div>
    );
}

type ErpAnalyticProps = {
    erpAnalyticList: PendingAnalyticErp[];
};

export function ErpAnalytic({ erpAnalyticList }: ErpAnalyticProps) {
    interface ErpAnalyticData {
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
    const erpAnalyticColumns: ColumnsType<ErpAnalyticData> = [
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

    const erpAnalyticData: ErpAnalyticData[] = erpAnalyticList.map(
        (erpAnalytic, index) => ({
            key: index,
            data: erpAnalytic.dt_sale,
            nome: erpAnalytic.enterprise,
            vrVendas: erpAnalytic.sale_amount,
            vrConciliado: erpAnalytic.sale_unreconciled,
            numPar: erpAnalytic.instalments,
            parConc: erpAnalytic.instalments_reconciled,
            pendentes: erpAnalytic.instalments_unreconciled,
            acoes: "",
        })
    );
    return <Table columns={erpAnalyticColumns} dataSource={erpAnalyticData} />;
}