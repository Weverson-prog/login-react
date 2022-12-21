import { z } from "zod"

export const schemaDashboardInfo = z.object({
  name_holding: z.string(),
  sales_operators_operator: z.array(
    z.object({
      operator: z.string(),
      installments: z.number(),
      amount: z.number()
    })
  ),
  sales_operators_brand: z.array(z.object({ brand: z.string(), amount: z.number() })),
  sales_operators_daily: z.array(z.object({ day: z.string(), amount: z.number() })),
  sales_erp_daily: z.array(z.object({ dt_sale: z.string(), amount: z.number() })),
  card: z.array(
    z.object({
      sale_amount: z.number(),
      net_received: z.number(),
      value_reconciled: z.number(),
      reconciled_percentage: z.number(),
      pending_operator_reconciled: z.number(),
      pending_erp_reconciled: z.number(),
      manual_reconciled: z.number()
    })
  ),
  reconciled_operators_daily: z.array(
    z.object({
      day: z.number(),
      date: z.string(),
      amount: z.number(),
      parcels: z.number()
    })
  ),
  reconciled_erp_daily: z.array(
    z.object({
      day: z.number(),
      date: z.string(),
      amount: z.number(),
      parcels: z.number()
    })
  ),
  pending_analytic_operator: z.array(
    z.object({
      dt_sale: z.string(),
      nr_subsidiary: z.string(),
      enterprise: z.string(),
      sale_amount: z.number(),
      sale_unreconciled: z.number(),
      instalments: z.number(),
      instalments_reconciled: z.number(),
      instalments_unreconciled: z.number()
    })
  ),
  pending_synthetic_operator: z.array(
    z.object({
      enterprise: z.string(),
      sale_amount: z.number(),
      sale_unreconciled: z.number(),
      instalments: z.number(),
      instalments_reconciled: z.number(),
      instalments_unreconciled: z.number()
    })
  ),
  pending_analytic_erp: z.array(
    z.object({
      dt_sale: z.string(),
      enterprise: z.string(),
      sale_amount: z.number(),
      sale_unreconciled: z.number(),
      instalments: z.number(),
      instalments_reconciled: z.number(),
      instalments_unreconciled: z.number()
    })
  ),
  pending_synthetic_erp: z.array(
    z.object({
      enterprise: z.string(),
      sale_amount: z.number(),
      sale_unreconciled: z.number(),
      instalments: z.number(),
      instalments_reconciled: z.number(),
      instalments_unreconciled: z.number()
    })
  )
})
