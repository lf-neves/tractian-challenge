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

export const getWorkOrders = async (): Promise<Array<WorkOrder>> => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/workorders"
  );

  const wo = await resp.json();

  return wo as unknown as Array<WorkOrder>;
};
