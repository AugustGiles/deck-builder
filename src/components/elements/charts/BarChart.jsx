import React from "react";
import colors from "./colors";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from "recharts";

function CompiledBarChart({ data, xData, yData, legend }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xData}>
          <Label
            value={xData}
            offset={0}
            position="insideBottom"
            style={{ fontSize: "small" }}
          />
        </XAxis>
        <YAxis>
          <Label
            value={yData}
            position="insideLeft"
            angle="-90%"
            style={{ fontSize: "small" }}
          />
        </YAxis>
        <Tooltip />
        {legend && <Legend />}
        <Bar dataKey={yData}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CompiledBarChart;
