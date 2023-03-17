import { WorkOrder } from "./WorkOrders";

export enum AssetStatus {
  Running,
  Alerting,
  Stopped,
}

interface HealthHistory {
  status: string;
  timestamp: string;
}

interface Metric {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

export interface Asset {
  assignedUserIds: Array<Number>;
  companyId: number;
  healthHistory: Array<HealthHistory>;
  healthScore: number;
  id: number;
  image: string;
  metrics: Metric;
  model: string;
  name: string;
  sensor: Array<String>;
  specifications: any;
  status: AssetStatus;
  unitId: number;
  workOrders: Array<WorkOrder>;
}
