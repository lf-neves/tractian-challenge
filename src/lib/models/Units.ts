import { WorkOrder } from "./WorkOrders";

export interface Unit {
  companyId: number;
  id: number;
  name: string;
  workOrders: Array<WorkOrder>;
}
