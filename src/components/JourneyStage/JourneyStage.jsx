import React, { useState } from 'react';
import { Card } from '../ui/card';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, ComposedChart 
} from 'recharts';
import {
  ArrowRight, Stethoscope, Building2, User, LineChart as LineChartIcon,
  ClipboardCheck, AlertTriangle, ChevronDown, ChevronUp
} from 'lucide-react';

const JourneyStage = ({ stage, metrics, barriers, findings }) => {
  const [hoveredAction, setHoveredAction] = useState(null);
  const [showInsights, setShowInsights] = useState(false);

  const handleActionHover = (actionName) => {
    setHoveredAction(actionName);
  };

  const handleActionLeave = () => {
    setHoveredAction(null);
  };

  const toggleInsights = () => {
    setShowInsights(!showInsights);
  };

  // Colors for charts
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'];

  // Transform the insights data for visualizations
  const getChartData = () => {
    switch (stage.number) {
      case 1: {
        // Transform diagnosis time data for visualization
        const smaTrendsData = [
          { year: '2016', 'Type 3': 30, 'Type 4': 3 },
          { year: '2017', 'Type 3': 30, 'Type 4': 3 },
          { year: '2018', 'Type 3': 29, 'Type 4': 3 },
          { year: '2019', 'Type 3': 29, 'Type 4': 3 },
          { year: '2020', 'Type 3': 28, 'Type 4': 3 },
          { year: '2021', 'Type 3': 28, 'Type 4': 3 },
          { year: '2022', 'Type 3': 27, 'Type 4': 3 },
          { year: '2023', 'Type 3': 27, 'Type 4': 4 }
        ];
  
        const smaDistributionData = [
          { specialist: "Paediatric Neurologist", paediatric: 245, adult: 48 },
          { specialist: "Physical Therapist", paediatric: 225, adult: 130 },
          { specialist: "Pulmonologist", paediatric: 210, adult: 145 },
          { specialist: "Occupational Therapist", paediatric: 165, adult: 65 },
          { specialist: "Nutritionist", paediatric: 150, adult: 55 },
          { specialist: "Orthopaedic Surgeon", paediatric: 145, adult: 45 },
          { specialist: "Social Worker", paediatric: 115, adult: 55 },
          { specialist: "Speech Pathologist", paediatric: 105, adult: 15 },
          { specialist: "Gastroenterologist", paediatric: 90, adult: 50 },
          { specialist: "Cardiologist", paediatric: 60, adult: 37 },
          { specialist: "Psychologist", paediatric: 25, adult: 45 },
          { specialist: "Adult Neurologist", paediatric: 5, adult: 210 }
        ];
  
        return {
          type: 'line',
          lineData: smaTrendsData,
          
          smaDistributionData: smaDistributionData,
          title: 'SMA Type Distribution and Trends'
        };
      }
      case 2: {
        // Transform motor function data for visualization
        const motorFunctionData = [
          { name: 'Male', Type3: 26, Type4: 3 },
          { name: 'Female', Type3: 26, Type4: 3 },
          { name: 'Children', Type3: 11, Type4: 1 },
          { name: 'Teens', Type3: 24, Type4: 2 },
          { name: 'Adults', Type3: 38, Type4: 5 },
        ];
        const lineData1 = [
          { year: '2017', averageAge: 5.63, medianAge: 1.36 },
          { year: '2018', averageAge: 5.48, medianAge: 0.82 },
          { year: '2019', averageAge: 4.93, medianAge: 0.55 },
          { year: '2020', averageAge: 5.75, medianAge: 0.25 },
          { year: '2021', averageAge: 4.38, medianAge: 0.19 },
          { year: '2022', averageAge: 3.84, medianAge: 0.03 },
          { year: '2023', averageAge: 4.11, medianAge: 0.03 }
        ];
        const Screeningdata = [
          { name: 'Via Screening', value: 32 },
          { name: 'Not Via Screening', value: 68 },
        ];
        return {
          type: 'bar',
          motorFunctionData: motorFunctionData,
          Screeningdata:Screeningdata,
          lineData1:lineData1
          
        };
    
      }
      case 3: {
        // Transform treatment outcomes data for visualization
        const treatdata = [
          { name: 'Efficacy', 'Newborn Screened': 52, Teens: 44, Adults: 36, 'Newborn Screened (Other)': 39 },
          { name: 'Safety', 'Newborn Screened': 38, Teens: 42, Adults: 36, 'Newborn Screened (Other)': 26 },
          { name: 'Dosing Schedule', 'Newborn Screened': 4, Teens: 2, Adults: 5, 'Newborn Screened (Other)': 5 },
          { name: 'Route of Administration', 'Newborn Screened': 4, Teens: 8, Adults: 14, 'Newborn Screened (Other)': 19 },
          { name: 'Cost and/or Payor Coverage', 'Newborn Screened': 2, Teens: 4, Adults: 9, 'Newborn Screened (Other)': 11 }
        ];
        const treatmentData1 = [
          { year: 2017, value: 197 },
          { year: 2018, value: 119 },
          { year: 2019, value: 103 },
          { year: 2020, value: 60 },
          { year: 2021, value: 49 },
          { year: 2022, value: 37 },
          { year: 2023, value: 21.7 },
        ];
        const insuranceData = [
          { name: 'Coverage Approved', value: 74 },
          { name: 'Coverage Denied', value: 22 },
          { name: 'Appeal Pending', value: 4 },
        ];
        const Breathingdata = [
          { name: 'Supplemental Oxygen', value: 16 },
          { name: 'BPAP', value: 66 },
          { name: 'CPAP', value: 15 },
          { name: 'Ventilator', value: 21 }
        ];
        return {
          type: 'pie',
          treatmentData: treatdata,
          treatmentData1: treatmentData1,
          insuranceData:insuranceData,
          Breathingdata:Breathingdata,
          title: 'Treatment Effectiveness (%)'
        };
      }
      default:
        return null;
    }
  };

  const renderChartInsights = () => {
    const chartConfig = getChartData();
    if (!chartConfig) return null;

    const { type, motorFunctionData, title, lineData, lineData1,treatmentData, treatmentData1, insuranceData,smaDistributionData,Breathingdata,Screeningdata } = chartConfig;

    switch (type) {
      case 'line':
      return (
        <div className="w-full space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="grid grid-cols-2 gap-8">
            {/* Line Chart - Historical Trends */}
            <Card className="p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-4">Historical SMA Type Distribution</h4>
              <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={lineData} 
                      margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis 
                        domain={[0, 35]} 
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Type 3"
                        stroke="#ffc658"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        label={{
                          position: 'top',
                          fill: '#ffc658',
                          fontSize: 12,
                          formatter: (value) => `${value}%`
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Type 4"
                        stroke="#ff7300"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        label={{
                          position: 'top',
                          fill: '#ff7300',
                          fontSize: 12,
                          formatter: (value) => `${value}%`
                        }}
                      />
                    </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Specialists Chart */}
            <Card className="p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Types of Specialists Seen by SMA Patients</h4>
                <div className="h-[500px]"> {/* Adjust height as needed */}
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={smaDistributionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <YAxis 
                        type="category" 
                        dataKey="specialist" 
                        width={160}
                      />
                      <XAxis type="number" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="paediatric" fill="#8884d8" name="Paediatric" />
                      <Bar dataKey="adult" fill="#82ca9d" name="Adult" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
          </div>
        </div>
      );

      case 'bar':
        return (
          <div className="w-full space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="grid grid-cols-2 gap-8">
              <Card className="p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Gender and Age wise Distribution</h4>
                <div className="h-72">
                  <ResponsiveContainer>
                    <BarChart data={motorFunctionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Type3" stackId="a" fill="#FFCE56" name="Type 3" />
                      <Bar dataKey="Type4" stackId="a" fill="#4BC0C0" name="Type 4" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">Average Time to Treatment Trend</h4>
                  <div className="aspect-[4/3] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="averageAge" stroke="#8884d8" name="Average Age" />
                    <Line type="monotone" dataKey="medianAge" stroke="#82ca9d" name="Median Age" />
                  </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
            </div>


           
            <div className="grid grid-cols-2 gap-8">
              <Card className="p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-6">Insurance Coverage Status</h4>
                <div className="aspect-[4/3] w-full" style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Screeningdata}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {Screeningdata.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend 
                        layout="horizontal" 
                        align="center" 
                        verticalAlign="bottom"
                        wrapperStyle={{ paddingTop: '20px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              </div>
            </div>
          
        );

        case 'pie':
          return (
            <div className="w-full space-y-8">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <div className="grid grid-cols-2 gap-8">
                {/* Treatment Effectiveness Pie Chart */}
                <Card className="p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">Factor Comparison</h4>
                  <div className="aspect-[4/3] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={treatmentData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Newborn Screened" stackId="a" fill="#8884d8" />
                        <Bar dataKey="Teens" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="Adults" stackId="a" fill="#ffc658" />
                        <Bar dataKey="Newborn Screened (Other)" stackId="a" fill="#d0ed57" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
  
                {/* Time to Treatment Trend Line Chart */}
                <Card className="p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">Average Time to Treatment Trend</h4>
                  <div className="aspect-[4/3] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={treatmentData1}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#8884d8"
                          name="Days to Treatment"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
  
              <div className="grid grid-cols-2 gap-8">
              <Card className="p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-6">Insurance Coverage Status</h4>
                <div className="aspect-[4/3] w-full" style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={insuranceData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {insuranceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend 
                        layout="horizontal" 
                        align="center" 
                        verticalAlign="bottom"
                        wrapperStyle={{ paddingTop: '20px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-6">Breathing Support Type Percentage</h4>
                <div className="aspect-[4/3] w-full" style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Breathingdata}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {insuranceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend 
                        layout="horizontal" 
                        align="center" 
                        verticalAlign="bottom"
                        wrapperStyle={{ paddingTop: '20px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              </div>


              
            </div>
          );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full">
      <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200 transition-all duration-300 hover:shadow-xl">
        {/* Stage header and actions section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md transform transition-transform hover:scale-105">
              <span className="text-2xl font-bold text-white">{stage.number}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
              <p className="text-sm text-purple-700 mt-1">{stage.timeframe}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={toggleInsights}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg active:transform active:scale-95"
            >
              Insights
              {showInsights ? (
                <ChevronUp className="w-4 h-4 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform" />
              )}
            </button>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{stage.description}</p>

        {/* Actions Flow */}
        <div className="flex items-center gap-4 mb-6">
          {stage.actions.map((action, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex-1 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-purple-50 cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => handleActionHover(action.name)}
                onMouseLeave={handleActionLeave}
              >
                <div className="text-sm font-medium text-purple-900">{action.name}</div>
              </div>
              {idx < stage.actions.length - 1 && (
                <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0 animate-pulse" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Hovered Action Details */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {hoveredAction && (
            <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4 border border-purple-100">
              <h3 className="text-purple-800 font-semibold mb-2">
                {hoveredAction}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {stage.actions.find(action => action.name === hoveredAction)?.content}
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Insights Section - Now positioned correctly */}
      {showInsights && (
        <div className="mb-8">
          <Card className="bg-white rounded-lg shadow-lg p-6">
            {renderChartInsights()}
          </Card>
        </div>
      )}

      {/* Key Metrics, Barriers, and Findings Grid */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <LineChartIcon className="w-4 h-4" />
              Key Metrics
            </h3>
            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs leading-relaxed">{metric.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-span-6">
          <Card className="h-full p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Key Barriers
            </h3>
            <KeyBarriers barriers={barriers} />
          </Card>
        </div>

        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              Key Findings
            </h3>
            <div className="space-y-3">
              {findings.map((finding, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold text-gray-900 mb-2">{finding.description}</div>
                    {finding.subpoints && finding.subpoints.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1">
                        {finding.subpoints.map((subpoint, subIdx) => (
                          <li key={subIdx} className="text-xs leading-relaxed">{subpoint}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
    </div>
  );
};

const KeyBarriers = ({ barriers }) => {
  // Set the initial state to the first barrier group (or any default group)
  const [expandedBarrier, setExpandedBarrier] = useState(Object.keys(barriers)[0]);

  const toggleBarrier = (key) => {
    setExpandedBarrier(expandedBarrier === key ? null : key);
  };

  // Define colors for each barrier type
  const barrierColors = {
    physician: 'bg-red-100', 
    system: 'bg-blue-100',   
    patient: 'bg-green-100', 
  };

  return (
    <div className="space-y-4">
      {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
        <div key={groupIdx} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <button
            className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${barrierColors[key]}`}
            onClick={() => toggleBarrier(key)}
          >
            <div className="flex items-center gap-2">
              {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
              {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
              {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
              <h4 className="text-sm font-semibold capitalize">{key}</h4>
            </div>
            <div className="transform transition-transform duration-200">
              {expandedBarrier === key ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </div>
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            expandedBarrier === key ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className={`p-4 border-t border-gray-200 ${barrierColors[key]}`}>
              <ul className="space-y-3">
                {barrierGroup.map((barrier, idx) => (
                  <li key={idx} className="text-sm">
                    <div className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <span className="text-gray-800 font-medium">{barrier.description}</span>
                        {barrier.subpoints && (
                          <ul className="ml-4 space-y-1">
                            {barrier.subpoints.map((subpoint, subIdx) => (
                              <li key={subIdx} className="text-gray-600 flex items-center gap-2 before:content-['•'] before:text-purple-400">
                                <span className="text-xs leading-relaxed">{subpoint}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default JourneyStage;