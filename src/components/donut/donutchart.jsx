import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import "./radialChart.css";

const data = {
  Male: [
    { name: "Type 1", value: 24, color: "#60A5FA" },
    { name: "Type 2", value: 37, color: "#34D399" },
    { name: "Type 3", value: 26, color: "#FBBF24" },
    { name: "Type 4", value: 3, color: "#FB923C" },
    { name: "Unknown", value: 11, color: "#C084FC" },
  ],
  Female: [
    { name: "Type 1", value: 24, color: "#60A5FA" },
    { name: "Type 2", value: 37, color: "#34D399" },
    { name: "Type 3", value: 26, color: "#FBBF24" },
    { name: "Type 4", value: 3, color: "#FB923C" },
    { name: "Unknown", value: 9, color: "#C084FC" },
  ],
  Children: [
    { name: "Type 1", value: 45, color: "#60A5FA" },
    { name: "Type 2", value: 28, color: "#34D399" },
    { name: "Type 3", value: 11, color: "#FBBF24" },
    { name: "Type 4", value: 1, color: "#FB923C" },
    { name: "Unknown", value: 15, color: "#C084FC" },
  ],
  Teens: [
    { name: "Type 1", value: 46, color: "#60A5FA" },
    { name: "Type 2", value: 27, color: "#34D399" },
    { name: "Type 3", value: 24, color: "#FBBF24" },
    { name: "Type 4", value: 2, color: "#FB923C" },
    { name: "Unknown", value: 1, color: "#C084FC" },
  ],
  Adults: [
    { name: "Type 1", value: 9, color: "#60A5FA" },
    { name: "Type 2", value: 44, color: "#34D399" },
    { name: "Type 3", value: 38, color: "#FBBF24" },
    { name: "Type 4", value: 5, color: "#FB923C" },
    { name: "Unknown", value: 4, color: "#C084FC" },
  ],
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const DonutChart = ({ category, data }) => {
  return (
    <div className="donut-chart">
      <ResponsiveContainer width={100} height={100}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={28}
            outerRadius={40}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const RadialChart = () => {
  const radius = 35;
  const startAngle = -Math.PI / 2; // Start from top
  const angleStep = (2 * Math.PI) / 5;

  const positions = [
    { category: "Adults", angle: startAngle },
    { category: "Teens", angle: startAngle + angleStep },
    { category: "Children", angle: startAngle + 2 * angleStep },
    { category: "Female", angle: startAngle + 3 * angleStep },
    { category: "Male", angle: startAngle + 4 * angleStep },
  ].map(({ category, angle }) => ({
    category,
    x: 50 + radius * Math.cos(angle) + "%",
    y: 50 + radius * Math.sin(angle) + "%",
  }));

  return (
    <Card className="radial-chart-container">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-800">
          Staging Completion Rate Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="radial-chart-wrapper">
          <div className="central-node">
            <span>Staging Completion Rate</span>
          </div>

          <svg className="connecting-areas" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="area-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
              </radialGradient>
            </defs>
            {positions.map((pos, index) => {
              const nextPos = positions[(index + 1) % positions.length];
              const centerX = 50;
              const centerY = 50;
              const x1 = parseFloat(pos.x);
              const y1 = parseFloat(pos.y);
              const x2 = parseFloat(nextPos.x);
              const y2 = parseFloat(nextPos.y);

              const path = `
                M ${centerX} ${centerY}
                L ${x1} ${y1}
                A ${radius} ${radius} 0 0 1 ${x2} ${y2}
                Z
              `;

              return (
                <path
                  key={index}
                  d={path}
                  fill="url(#area-gradient)"
                  className="connecting-area"
                />
              );
            })}
          </svg>

          {positions.map((pos) => (
            <div
              key={pos.category}
              className="chart-node"
              style={{
                left: pos.x,
                top: pos.y,
              }}
            >
              <div className="node-content">
                <DonutChart category={pos.category} data={data[pos.category]} />
                <div className="node-label">{pos.category}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="chart-legend">
          {data.Male.map((item, index) => (
            <div key={index} className="legend-item">
              <div
                className="legend-color"
                style={{ backgroundColor: item.color }}
              />
              <span className="legend-label">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RadialChart;
