import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface HealthHistoryChartProps {
  healthHistory: Array<{ timestamp: string; status: string }>;
}

enum AssetStatus {
  inOperation = 4,
  inAlert = 2,
  inDownTime = 0,
}

const formatTimestampToDayWithMonth = (timestamp: string) => {
  const date = timestamp.split("T")[0];
  return `${date.split("-")[1]}/${date.split("-")[2]}`;
};

export const HealthHistoryChart: React.FC<HealthHistoryChartProps> = ({
  healthHistory,
}) => {
  const formattedDataSource = healthHistory.map((hValue) => {
    return {
      name: formatTimestampToDayWithMonth(hValue.timestamp),
      //@ts-ignore
      uv: AssetStatus[hValue.status], //TODO: FIX TO USE ENUM
    };
  });

  return (
    <div style={{ width: "100%", marginTop: 20 }}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={formattedDataSource}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
