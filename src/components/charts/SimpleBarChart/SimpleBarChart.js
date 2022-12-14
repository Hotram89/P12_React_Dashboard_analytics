import React from "react";
import PropTypes from "prop-types";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import "./SimpleBarChart.css";
import {
  BarChart,
  Bar,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

function FirstBarChart({ dto }) {
  const firstBarChartDto = dto.dailyActivity;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={firstBarChartDto.dataBars}
        margin={{
          top: 60,
          right: 30,
          left: 20,
          bottom: 35,
        }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickSize={20}
          padding={{ bottom: 10 }}
        />
        <YAxis
          orientation="right"
          tickMargin={40}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconType="circle"
          iconSize="10"
          verticalAlign="top"
          align="right"
        />

        <Bar
          dataKey="poids"
          name="Poids (kg)"
          fill="#282D30"
          barSize={10}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={10}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default FirstBarChart;

FirstBarChart.propTypes = {
  dto: PropTypes.shape({
    dataBars: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.number.isRequired,
        calories: PropTypes.number,
        poids: PropTypes.number,
      })
    ),
  }),
};
