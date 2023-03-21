//@ts-nocheck
import { Asset, AssetStatusEnum } from "@/lib/models";
import { Box } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

//TODO; FIX TS ERRORS AND COLORS ARRAY TO USE ENUM

interface AssetsChartProps {
  assets: Array<Asset>;
}

const COLORS = ["#FFBB28", "#00C49F", "#FF8042"];

const data = [
  {
    name: "In Alert",
    value: 0,
  },
  {
    name: "In Operation",
    value: 0,
  },
  {
    name: "In Downtime",
    value: 0,
  },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const AssetsChart: React.FC<AssetsChartProps> = ({ assets }) => {
  assets?.forEach((asset) => {
    switch (asset.status) {
      case AssetStatusEnum.inOperation:
        data[0].value += 1;
        break;
      case AssetStatusEnum.inAlert:
        data[1].value += 1;
        break;
      case AssetStatusEnum.inDowntime:
        data[2].value += 1;
        break;
    }
  });

  return (
    <Box
      sx={{
        padding: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};
