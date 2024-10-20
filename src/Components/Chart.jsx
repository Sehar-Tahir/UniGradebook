import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const data = [
  { name: 'A', value: 18.2 },
  { name: 'B', value: 40.9 },
  { name: 'C', value: 27.3 },
  { name: 'D', value: 9.1 },
  { name: 'E', value: 4.5 },
];

const COLORS = ['#cb6ce6', '#9854AD', '#723C82', '#44244D', '#2A1631'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = outerRadius + 18;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" fontSize="10" textAnchor="middle" dominantBaseline="central">
      <tspan x={x} dy="-0.6em" fontWeight="600">{data[index].name}</tspan>
      <tspan x={x} dy="1.2em" fontWeight="600">{`${(percent * 100).toFixed(1)}%`}</tspan>
    </text>
  );
};

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={40}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
        >
          <Label
            value="Average GPA 3.12"
            position="center"
            fill="black"
            fontSize="8"
            fontWeight="bold"
          />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;


