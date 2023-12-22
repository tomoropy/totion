"use client";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";

export default function Home() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400 },
    { name: "Page B", uv: 3000, pv: 1398 },
    { name: "Page C", uv: 2000, pv: 9800 },
    { name: "Page D", uv: 2780, pv: 3908 },
    { name: "Page E", uv: 1890, pv: 4800 },
  ];

  return (
    <LineChart
      width={1200}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      className="mx-auto mt-[300px]"
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
}
