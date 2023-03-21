import { WorkOrder } from "./WorkOrders";

export interface HealthHistory {
  status: AssetStatusEnum;
  timestamp: string;
}

interface Metric {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}
interface Specifications {
  maxTemp?: number;
  power?: number;
  rpm?: number;
}

export enum AssetStatusEnum {
  inAlert = "inAlert",
  inOperation = "inOperation",
  inDowntime = "inDowntime",
}

export interface Asset {
  assignedUserIds: Array<Number>;
  companyId: number;
  healthHistory: Array<HealthHistory>;
  healthscore: number;
  id: number;
  image: string;
  metrics: Metric;
  model: string;
  name: string;
  sensors: Array<string>;
  specifications: Specifications;
  status: AssetStatusEnum;
  unitId: number;
  workOrders: Array<WorkOrder>;
}
