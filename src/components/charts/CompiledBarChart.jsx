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

function CompiledBarChart(props) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={props.data}>
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props.xData}>
          <Label
            value={props.xData}
            offset={0}
            position="insideBottom"
            style={{ fontSize: "small" }}
          />
        </XAxis>
        <YAxis>
          <Label
            value={props.yData}
            position="insideLeft"
            angle="-90%"
            style={{ fontSize: "small" }}
          />
        </YAxis>
        <Tooltip />
        {props.legend && <Legend />}
        <Bar dataKey={props.yData}>
          {props.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CompiledBarChart;
