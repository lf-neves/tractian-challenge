export enum WorkOrderStatus {
  completed = "completed",
  progress = "in progress",
}

export interface ChecklistOption {
  completed: boolean;
  task: string;
}

export interface WorkOrder {
  assetId: number;
  assignedUserIds: Array<number>;
  checklist: Array<ChecklistOption>;
  description: string;
  id: number;
  priority: string; //Todo:  Should be a enum too, investigate the possible states
  status: WorkOrderStatus;
  title: string;
}
