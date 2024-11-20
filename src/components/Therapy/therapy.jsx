import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const TherapyAnalysisAdvanced = () => {
  const breathingData = [
    { name: 'BPAP', value: 66, fill: '#8884d8' },
    { name: 'Ventilator', value: 21, fill: '#83a6ed' },
    { name: 'Supplemental Oxygen', value: 16, fill: '#8dd1e1' },
    { name: 'CPAP', value: 15, fill: '#82ca9d' }
  ].sort((a, b) => b.value - a.value);

  const feedingData = [
    { name: 'Unrestricted Oral Diet', value: 60, fill: '#ff8042' },
    { name: 'Oral Diet (Special)', value: 19, fill: '#ffc658' },
    { name: 'Feeding Tube + Oral', value: 14, fill: '#a4de6c' },
    { name: 'Tube-Dependent', value: 7, fill: '#d0ed57' }
  ].sort((a, b) => b.value - a.value);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center mb-6">
          Comprehensive Therapy Support Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Breathing Support Section */}
          <div className="h-[500px]">
            <h3 className="text-xl font-semibold text-center mb-4">Breathing Support Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
                data={breathingData}
                startAngle={180}
                endAngle={-180}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise={true}
                  dataKey="value"
                  cornerRadius={10}
                  label={{ fill: '#666', position: 'insideStart' }}
                />
                <Tooltip
                  formatter={(value) => `${value}%`}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{ fontSize: '12px' }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          {/* Feeding Support Section */}
          <div className="h-[500px]">
            <h3 className="text-xl font-semibold text-center mb-4">Feeding Routine Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={feedingData}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {feedingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `${value}%`}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  wrapperStyle={{ fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-4 bg-blue-50 rounded-lg shadow-md">
            <h4 className="font-semibold text-center mb-2">Key Breathing Support Insights</h4>
            <ul className="list-disc pl-4">
              <li>BPAP is the primary support method ({breathingData[0].value}%)</li>
              <li>Combined non-invasive support: {breathingData[0].value + breathingData[3].value}%</li>
              <li>Ventilator dependency: {breathingData[1].value}%</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-md">
            <h4 className="font-semibold text-center mb-2">Key Feeding Routine Insights</h4>
            <ul className="list-disc pl-4">
              <li>Majority maintain oral diet ({feedingData[0].value}%)</li>
              <li>Special dietary needs: {feedingData[1].value}%</li>
              <li>Complete tube dependency: {feedingData[3].value}%</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TherapyAnalysisAdvanced;
