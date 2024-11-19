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

  return (
    <div className="flex gap-8 p-4">
      {/* Main Chart (Centered) */}
      <div className="relative flex-none self-center">
        <h3 className="font-semibold text-lg mb-3 text-center">Gender Distribution</h3>
        <PieChart width={250} height={250}>
          <Pie
            data={data.gender}
            cx={125}
            cy={125}
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onMouseLeave={() => setHoveredGender(null)} // Reset on leave
          >
            {data.gender.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                onMouseEnter={() => setHoveredGender(entry.name.toLowerCase())} // Set hovered gender
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
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
          <PieChart width={250} height={200}>
            <Pie
              data={data.ageGroups.male}
              cx={125}
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
            hoveredGender === 'female' ? 'scale-105 shadow-lg' : 'opacity-75'
          }`}
        >
          <h3 className="font-semibold text-lg mb-2 text-center">Female Age Distribution</h3>
          <PieChart width={250} height={200}>
            <Pie
              data={data.ageGroups.female}
              cx={125}
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
