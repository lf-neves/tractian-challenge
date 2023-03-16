export const getWorkOrders = async (): Promise<Array<WorkOrder>> => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/workorders"
  );

  const wo = await resp.json();

  return wo as unknown as Array<WorkOrder>;
};
