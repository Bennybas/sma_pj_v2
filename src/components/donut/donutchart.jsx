import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = {
  gender: [
    { name: 'Male', value: 60 },
    { name: 'Female', value: 40 },
  ],
  ageGroups: {
    male: [
      { name: 'Children', value: 50 },
      { name: 'Teens', value: 30 },
      { name: 'Adults', value: 20 },
    ],
    female: [
      { name: 'Children', value: 40 },
      { name: 'Teens', value: 35 },
      { name: 'Adults', value: 25 },
    ],
  },
};

const COLORS = ['#0088FE', '#FF8042'];
const AGE_COLORS = ['#83a6ed', '#8dd1e1', '#82ca9d'];

const DonutChartWithSubcharts = () => {
  const [hoveredGender, setHoveredGender] = useState(null);
  const [hoveredGenderIndex, setHoveredGenderIndex] = useState(null);

  const calculateLinePosition = (angle, radius, cx, cy) => {
    const radians = (angle - 90) * (Math.PI / 180);
    return { 
      x: cx + radius * Math.cos(radians),
      y: cy + radius * Math.sin(radians) 
    };
  };

  const calculateConnectorLine = (gender) => {
    const centerX = 150;
    const centerY = 150;
    const outerRadius = 120;
    const angle = gender === 'male' ? (360 * 60) / 100 : (360 * 40) / 100;
    const linePosition = calculateLinePosition(angle / 2, outerRadius, centerX, centerY);
    const targetX = gender === 'male' ? 125 : 275;
    const targetY = gender === 'male' ? 125 : 275;

    return { x1: linePosition.x, y1: linePosition.y, x2: targetX, y2: targetY };
  };

  return (
    <div className="flex justify-center p-4">
      {/* Main Chart (Centered) */}
      <div className="relative flex-none self-center">
        <h3 className="font-semibold text-lg mb-3 text-center">Gender Distribution</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={data.gender}
            cx={150}
            cy={150}
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onMouseLeave={() => {
              setHoveredGender(null);
              setHoveredGenderIndex(null);
            }}
          >
            {data.gender.map((entry, index) => {
              const angle = (360 * entry.value) / 100;
              const linePosition = calculateLinePosition(angle / 2, 120, 150, 150);
              return (
                <React.Fragment key={`fragment-${index}`}>
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    onMouseEnter={() => {
                      setHoveredGender(entry.name.toLowerCase());
                      setHoveredGenderIndex(index);
                    }}
                  />
                  {hoveredGenderIndex === index && (
                    <line
                      key={`line-${index}`}
                      x1={150}
                      y1={150}
                      x2={linePosition.x}
                      y2={linePosition.y}
                      stroke={COLORS[index % COLORS.length]}
                      strokeWidth="2"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        {/* Connecting lines to Male and Female charts */}
        {hoveredGender === 'male' && (
          <line
            x1={calculateConnectorLine('male').x1}
            y1={calculateConnectorLine('male').y1}
            x2={calculateConnectorLine('male').x2}
            y2={calculateConnectorLine('male').y2}
            stroke={COLORS[0]}
            strokeWidth="2"
          />
        )}
        {hoveredGender === 'female' && (
          <line
            x1={calculateConnectorLine('female').x1}
            y1={calculateConnectorLine('female').y1}
            x2={calculateConnectorLine('female').x2}
            y2={calculateConnectorLine('female').y2}
            stroke={COLORS[1]}
            strokeWidth="2"
          />
        )}
      </div>

      {/* Right-Side Subcharts */}
      <div className="flex flex-col justify-between gap-4">
        {/* Male Age Distribution */}
        <div
          className={`transition-all duration-300 transform ${
            hoveredGender === 'male' ? 'scale-105 shadow-lg' : 'opacity-75'
          }`}
        >
          <h3 className="font-semibold text-lg mb-2 text-center">Male Age Distribution</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={data.ageGroups.male}
              cx={100}
              cy={100}
              innerRadius={30}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.ageGroups.male.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={AGE_COLORS[index % AGE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Female Age Distribution */}
        <div
          className={`transition-all duration-300 transform ${
            hoveredGender === 'female' ? 'scale-105 shadow-lg' : 'opacity-200'
          }`}
        >
          <h3 className="font-semibold text-lg mb-2 text-center">Female Age Distribution</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={data.ageGroups.female}
              cx={100}
              cy={100}
              innerRadius={30}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.ageGroups.female.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={AGE_COLORS[index % AGE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default DonutChartWithSubcharts;