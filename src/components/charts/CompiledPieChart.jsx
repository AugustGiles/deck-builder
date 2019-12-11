import React from "react";
import colors from "./colors";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function CompiledPieChart(props) {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value
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
        style={{ fontSize: "small" }}
      >
        {value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={730} height={250}>
        <Pie
          data={props.data}
          dataKey={props.dataKey}
          nameKey={props.nameKey}
          cx="50%"
          cy="50%"
          innerRadius={10}
          outerRadius={100}
          // label
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {props.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CompiledPieChart;
