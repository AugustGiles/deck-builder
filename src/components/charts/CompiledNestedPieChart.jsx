import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

function CompiledNestedPieChart(props) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart width={730} height={250}>
        <Pie
          data={props.data1}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={props.data2}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CompiledNestedPieChart;