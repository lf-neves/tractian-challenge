import { WorkOrder } from "./WorkOrders";

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
  healthscore: number;
  id: number;
  image: string;
  metrics: Metric;
  model: string;
  name: string;
  sensors: Array<string>;
  specifications: any;
  status: string;
  unitId: number;
  workOrders: Array<WorkOrder>;
}
