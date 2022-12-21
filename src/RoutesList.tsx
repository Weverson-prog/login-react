import * as Page from "@pages/index"
import { RouteObject } from "react-router-dom"

export const RoutesList: RouteObject[] = [
  {
    path: "/",
    element: <Page.Home />
  },
  {
    path: "dashboard",
    element: <Page.Dashboard />
  },
  {
    path: "conciliacao",
    element: <Page.Conciliacao />
  },
  {
    path: "config_operadoras",
    element: <Page.ConfigOperadoras />
  },
  {
    path: "usuarios",
    element: <Page.Usuarios />
  },
  {
    path: "taxas",
    element: <Page.Taxas />
  },
  {
    path: "contratos",
    element: <Page.Contratos />
  },
  {
    path: "terminais",
    element: <Page.Terminais />
  },
  {
    path: "empresas",
    element: <Page.Empresas />
  },
  {
    path: "vendas_por_filial",
    element: <Page.VendasPorFilial />
  },
  {
    path: "vendas_por_contrato",
    element: <Page.VendasPorContrato />
  },
  {
    path: "vendas_nao_expor",
    element: <Page.VendasNaoExpor />
  },
  {
    path: "vendas_canceladas",
    element: <Page.VendasCanceladas />
  },
  {
    path: "saque",
    element: <Page.Saque />
  },
  {
    path: "recebiveis",
    element: <Page.Recebiveis />
  },
  {
    path: "calendario_de_recebimento",
    element: <Page.CalendarioDeRecebimento />
  },
  {
    path: "baixas_nsu",
    element: <Page.BaixasNsu />
  },
  {
    path: "credito_em_conta",
    element: <Page.CreditoEmConta />
  },
  {
    path: "taxas_administrativas",
    element: <Page.TaxasAdministrativas />
  },
  {
    path: "recebimentos_bandeiras",
    element: <Page.RecebimentosBandeiras />
  },
  {
    path: "antecipacoes",
    element: <Page.Antecipacoes />
  },
  {
    path: "upload_de_arquivos",
    element: <Page.UploadDeArquivos />
  },
  {
    path: "mensagens",
    element: <Page.Mensagens />
  },
  {
    path: "excluir_conciliados",
    element: <Page.ExcluirConciliados />
  },
  {
    path: "inclusao_de_ajuste",
    element: <Page.InclusaoDeAjuste />
  },
  {
    path: "baixa_titulos_receber",
    element: <Page.BaixaTitulosReceber />
  },
  {
    path: "inclusao_de_titulos",
    element: <Page.InclusaoDeTitulos />
  },
  {
    path: "vendas_por_mes",
    element: <Page.VendasPorMes />
  },
  {
    path: "administrador",
    element: <Page.Administrador />
  },
  {
    path: "cartao",
    element: <Page.Cartao />
  },
  {
    path: "marketplace",
    element: <Page.Marketplace />
  },
  {
    path: "redefinir_senha",
    element: <Page.RedefinirSenha />
  }
]
