import { schemaDashboardInfo } from "@services/schemas/dashboard"
import { z } from "zod"

export type DashboardInfo = z.infer<typeof schemaDashboardInfo>
