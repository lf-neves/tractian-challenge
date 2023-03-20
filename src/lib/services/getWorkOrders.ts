import { WorkOrder } from "../models/WorkOrders";

export const getWorkOrders = async (): Promise<Array<WorkOrder>> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workorders`);

  const wo = await resp.json();

  return wo as unknown as Array<WorkOrder>;
};
