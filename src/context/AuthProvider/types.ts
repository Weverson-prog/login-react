export interface IUser {
  email?: string
  token?: string
}

export interface IContext extends IUser {
  authenticated: (email: string, password: string) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children?: JSX.Element
}

export interface Root {
  name_holding: string
  sales_operators_operator: SalesOperatorsOperator[]
  sales_operators_brand: SalesOperatorsBrand[]
  sales_operators_daily: SalesOperatorsDaily[]
  sales_erp_daily: SalesErpDaily[]
  card: Card[]
  reconciled_operators_daily: ReconciledOperatorsDaily[]
  reconciled_erp_daily: ReconciledErpDaily[]
  pending_analytic_operator: PendingAnalyticOperator[]
  pending_synthetic_operator: PendingSyntheticOperator[]
  pending_analytic_erp: PendingAnalyticErp[]
  pending_synthetic_erp: PendingSyntheticErp[]
}

export interface SalesOperatorsOperator {
  operator: string
  installments: number
  amount: number
}

export interface SalesOperatorsBrand {
  brand: string
  amount: number
}

export interface SalesOperatorsDaily {
  day: string
  amount: number
}

export interface SalesErpDaily {
  dt_sale: string
  amount: number
}

export interface Card {
  sale_amount: number
  net_received: number
  value_reconciled: number
  reconciled_percentage: number
  pending_operator_reconciled: number
  pending_erp_reconciled: number
  manual_reconciled: number
}

export interface ReconciledOperatorsDaily {
  day: number
  date: string
  amount: number
  parcels: number
}

export interface ReconciledErpDaily {
  day: number
  date: string
  amount: number
  parcels: number
}

export interface PendingAnalyticOperator {
  dt_sale: string
  nr_subsidiary: string
  enterprise: string
  sale_amount: number
  sale_unreconciled: number
  instalments: number
  instalments_reconciled: number
  instalments_unreconciled: number
}

export interface PendingSyntheticOperator {
  enterprise: string
  sale_amount: number
  sale_unreconciled: number
  instalments: number
  instalments_reconciled: number
  instalments_unreconciled: number
}

export interface PendingAnalyticErp {
  dt_sale: string
  enterprise: string
  sale_amount: number
  sale_unreconciled: number
  instalments: number
  instalments_reconciled: number
  instalments_unreconciled: number
}

export interface PendingSyntheticErp {
  enterprise: string
  sale_amount: number
  sale_unreconciled: number
  instalments: number
  instalments_reconciled: number
  instalments_unreconciled: number
}
