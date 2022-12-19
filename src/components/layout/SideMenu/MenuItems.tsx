import {
  BankOutlined,
  CloudServerOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  FileSearchOutlined,
  HomeOutlined,
  LogoutOutlined,
  MailOutlined,
  RetweetOutlined,
  SettingOutlined
} from "@ant-design/icons"
import { MenuProps } from "antd"
import { NavLink } from "react-router-dom"

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children
  } as MenuItem
}

export const MenuItems: MenuItem[] = [
  getItem("MN PRÁTICO", "sub1", null, [
    getItem("CARTAO", "1", <NavLink to="/cartao" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("MARKETPLACE", "2", <NavLink to="/marketplace" style={{ marginLeft: "-25px" }}></NavLink>)
  ]),

  getItem("BLUK", "sub2", <MailOutlined />, [
    getItem("ADMINISTRADOR", "3", <NavLink to="/administrador" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("REDEFINIR SENHA", "4", <NavLink to="/redefinir_senha" style={{ marginLeft: "-25px" }}></NavLink>)
  ]),

  getItem(
    "HOME",
    null,
    <NavLink to="/" style={{ marginLeft: "0" }}>
      <HomeOutlined />
    </NavLink>
  ),

  getItem(
    "CONCILIAÇÃO",
    null,
    <NavLink to="/conciliacao" style={{ marginLeft: "0" }}>
      <RetweetOutlined />
    </NavLink>
  ),

  getItem("CADASTROS", "sub3", <FileSearchOutlined />, [
    getItem("CONFIG. OPERADORAS", "5", <NavLink to="/config_operadoras" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("USUÁRIOS", "6", <NavLink to="/usuarios" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("TAXAS", "7", <NavLink to="/taxas" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("CONTRATOS", "8", <NavLink to="/contratos" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("TERMINAIS", "9", <NavLink to="/terminais" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("EMPRESAS", "10", <NavLink to="/empresas" style={{ marginLeft: "-25px" }}></NavLink>)
  ]),

  getItem("VENDAS", "sub4", <DollarCircleOutlined />, [
    getItem("VENDAS POR FILIAL", "11", <NavLink to="/vendas_por_filial" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("VENDAS POR CONTRATO", "12", <NavLink to="/vendas_por_contrato" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("VENDAS NÃO EXPOR", "13", <NavLink to="/vendas_nao_expor" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("VENDAS CANCELADAS", "14", <NavLink to="/vendas_canceladas" style={{ marginLeft: "-25px" }}></NavLink>)
  ]),

  getItem("RECEBIMENTOS", "sub5", <BankOutlined />, [
    getItem("SAQUE", "15", <NavLink to="/saque" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("RECEBIVEIS", "16", <NavLink to="/recebiveis" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem(
      "CALENDÁRIO DE RECEBIMENTO",
      "17",
      <NavLink to="/calendario_de_recebimento" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem("BAIXAS NSU", "18", <NavLink to="/baixas_nsu" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("CRÉDITO EM CONTA", "19", <NavLink to="/credito_em_conta" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem(
      "TAXAS ADMINISTRATIVAS",
      "20",
      <NavLink to="/taxas_administrativas" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem(
      "RECEBIMENTOS BANDEIRAS",
      "21",
      <NavLink to="/recebimentos_bandeiras" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem("ANTECIPAÇÕES", "22", <NavLink to="/antecipacoes" style={{ marginLeft: "-25px" }}></NavLink>)
  ]),

  getItem(
    "DASHBOARD",
    null,
    <NavLink to="/dashboard" style={{ marginLeft: "0" }}>
      <DashboardOutlined />
    </NavLink>
  ),

  getItem("ERP", "sub6", <CloudServerOutlined />, [
    getItem("INCLUSÃO DE AJUSTE", "23", <NavLink to="/inclusao_de_ajuste" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem(
      "BAIXA TÍTULOS RECEBER",
      "24",
      <NavLink to="/baixa_titulos_receber" style={{ marginLeft: "-25px" }}></NavLink>
    ),
    getItem("INCLUSÃO DE TÍTULOS", "25", <NavLink to="/inclusao_de_titulos" style={{ marginLeft: "-25px" }}></NavLink>)
  ]),

  getItem("OUTROS", "sub7", <SettingOutlined />, [
    getItem("UPLOAD DE ARQUIVOS", "26", <NavLink to="/upload_de_arquivos" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("MENSAGENS", "27", <NavLink to="/mensagens" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("EXCLUIR CONCILIADOS", "28", <NavLink to="/excluir_conciliados" style={{ marginLeft: "-25px" }}></NavLink>),
    getItem("VENDAS POR MÊS", "29", <NavLink to="/vendas_por_mes" style={{ marginLeft: "-25px" }}></NavLink>)
  ]),

  getItem(
    "LOGOUT",
    null,
    <NavLink to="/login" style={{ marginLeft: "0", marginBottom: "7px" }}>
      <LogoutOutlined />
    </NavLink>
  )
]
