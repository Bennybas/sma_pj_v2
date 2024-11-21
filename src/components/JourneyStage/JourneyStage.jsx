import React, { useState } from 'react';
import { Card } from '../ui/card';
import SankeyDiagram from '../sankey/sankeyDiag';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import {
  ArrowRight, Stethoscope, Building2, User, LineChart as LineChartIcon,
  ClipboardCheck, AlertTriangle, ChevronDown, ChevronUp
} from 'lucide-react';
import StateScreeningMap from '../usa/USAstate.jsx';

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
        const SMN2  = [
          { name: "1-Copy", Percentage: 3, Severity: "Severe (Type 1, Type 2)" },
          { name: "2-Copies", Percentage: 36, Severity: "Severe (Type 1, Type 2)" },
          { name: "3-Copies", Percentage: 48, Severity: "Mild (Type 3, Type 4)" },
          { name: "4+Copies", Percentage: 14, Severity: "Mild (Type 3, Type 4)" },
        ];
        const Screeningdata = [
          { name: 'Test Diagnosed', value: 32 },
          { name: 'Symptom Diagnosed', value: 68 },
        ];
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
        const distanceAccessData = [
          { distance: '<=30 Miles', value: 73.77, fill: '#82ca9d' }, // Green
          { distance: '>30 Miles', value: 26.23, fill: '#8884d8' }  // Blue
        ];
        const waitTimeData = [
          { category: "Children", "No of days": 14.2 },
          { category: "Teen", "No of days": 21.5 },
          { category: "Adult",  "No of days": 27.8 },
        ];
        const bubbledata = [
          { area: 'Urban Areas', days: 15, population: 500000, x: 10, y: 5 },
          { area: 'Suburban Areas', days: 24, population: 300000, x: 20, y: 10 },
          { area: 'Rural Areas', days: 35, population: 100000, x: 30, y: 15 },
        ];

        const smaDistributionData = [
          { category: "Pulmonologist", percentage: 98 },
          { category: "Physical Therapist", percentage: 90 },
          { category: "Pediatric Neurologist", percentage: 83 },
          { category: "Occupational Therapist", percentage: 64 },
          { category: "Nutritionist", percentage: 58 },
        ];        
      
        
        return {
          type: 'bar',
          motorFunctionData: motorFunctionData,
          Screeningdata:Screeningdata,
          SMN2:SMN2,
          lineData: smaTrendsData,
          distanceAccessData:distanceAccessData,
          waitTimeData:waitTimeData,
          bubbledata:bubbledata,
          smaDistributionData:smaDistributionData
          
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
        const insuranceData1 = [
          { type: "Medicaid", value: 55.5 },
          { type: "Medicare", value: 24.5 },
          { type: "Commercial", value: 58 }
        ];
        
        
        
        // const breathingData = [
        //   { name: 'BPAP', value: 66, fill: '#8884d8' },
        //   { name: 'Ventilator', value: 21, fill: '#83a6ed' },
        //   { name: 'Supplemental Oxygen', value: 16, fill: '#8dd1e1' },
        //   { name: 'CPAP', value: 15, fill: '#82ca9d' }
        // ].sort((a, b) => b.value - a.value);

        const SMA_Treatments = [
          
          { SMA_Treatments: 'Monotherapy', Percentage: 67, fill: '#ffc658' },
          { SMA_Treatments: 'Combined Therapy', Percentage: 30, fill: '#a4de6c' }
        ];
        
        


        const mortality = [
          { year: 2013, value: 2.36 },
          { year: 2014, value: 1.75 },
          { year: 2015, value: 1.5 },
          { year: 2016, value: 1.85 },
          { year: 2017, value: 1 },
          { year: 2018, value: 0.85 },
          { year: 2019, value: 0.75 },
          { year: 2020, value: 0.9 },
          { year: 2021, value: 0.75 },
          { year: 2022, value: 0.75 },
          { year: 2023, value: 0.75 }
        ];
        const hospitalizationData = [
          { year: 2021, pediatrics: 6, adults: 19 },
          { year: 2022, pediatrics: 9, adults: 21 },
          { year: 2023, pediatrics: 9, adults: 25 }
        ];
        const impactData = [
          { impact: "Daily activity impairment due to SMA", caregiver: 42, affectedAdult: 55 },
          { impact: "Overall work impairment due to SMA", caregiver: 37, affectedAdult: 27 },
          { impact: "Impairment while working", caregiver: 30, affectedAdult: 26 },
          { impact: "Work time missed due to SMA", caregiver: 13, affectedAdult: 4 }
        ];
        const teledata = [
          { name: 'Not/Minimally Effective', percentage: 19 },
          { name: 'Moderately Effective', percentage: 37 },
          { name: 'Effective/Very Effective', percentage: 44 },
        ];
        
        
        
        return {
          type: 'pie',
          treatmentData: treatdata,
          treatmentData1: treatmentData1,
          insuranceData:insuranceData,
          insuranceData1:insuranceData1,
          SMA_Treatments:SMA_Treatments,
          mortality:mortality,
          hospitalizationData:hospitalizationData,
          impactData:impactData,
          teledata:teledata
         
        };
      }
      default:
        return null;
    }
  };

  const renderChartInsights = () => {
    const chartConfig = getChartData();
    if (!chartConfig) return null;

    const { type, title, lineData,smaDistributionData, SMN2,distanceAccessData, treatmentData1, insuranceData1,insuranceData,SMA_Treatments,Screeningdata,mortality,hospitalizationData,waitTimeData,impactData,teledata } = chartConfig;

    switch (type) {
      case 'line':
      return (
        <div className="w-full space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <SankeyDiagram />
          
            {/* Line Chart - Historical Trends */}


            {/* Specialists Chart */}
            {/* <Card className="p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-4">
                Distribution of Specialists by Category (%)
              </h4>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={smaDistributionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis
                      type="category"
                      dataKey="category"
                      width={200}
                    />
                    <XAxis type="number" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="paediatric" fill="#8884d8" name="Paediatric" stackId="a" />
                    <Bar dataKey="adult" fill="#82ca9d" name="Adult" stackId="a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card> */}


          
        </div>
      );

      case 'bar':
        return (
          <div className="w-full space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="grid grid-cols-3 gap-8">
            <Card className="p-6">
            {/* <RadialChart /> */}
            <h4 className="text-sm font-medium text-gray-700 mb-6">Wait Time to Neurologist Consultation</h4>
            <div className="aspect-[4/3] w-full">
            <ResponsiveContainer width="105%" height="105%">
                <BarChart
                  data={waitTimeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value} days`} />
                  <Legend />
                  <Bar dataKey="No of days" fill="#82ca9d" name="No of days" stackId="a" />
                  {/* <Bar dataKey="> 2 weeks" fill="#8884d8" name="> 2 weeks" stackId="a" /> */}
                </BarChart>
              </ResponsiveContainer>

            </div>

            </Card>


            <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700 mb-6">SMN2 Copy Number Comparison</h4>
              <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={SMN2.map((entry, index) => ({
                      ...entry,
                      fill: ["#8884d8", "#82ca9d", "#ffc658", "#d0ed57"][index % 4],
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: "Percentage", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    
                    <Bar dataKey="Percentage" name="Percentage" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="text-sm font-medium text-gray-700 mb-6">Testing Facility Availabile Rate (%)</h4>
              <div className="aspect-[4/3] w-full">

              <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={distanceAccessData}
                          cx="50%"
                          cy="50%"
                          innerRadius="60%"
                          outerRadius="80%"
                          paddingAngle={5}
                          dataKey="value" // Correct data key for percentages
                          nameKey="distance" // Add the name key for tooltips and legends
                        >
                          {distanceAccessData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>

                        {/* Tooltip to display the correct percentage and treatment */}
                        <Tooltip
                          formatter={(value, _, props) => `${value}%`}
                          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                        />

                        {/* Adjusted Legend */}
                        <Legend
                          layout="horizontal"
                          align="center"
                          verticalAlign="bottom"
                          formatter={(value) => value}
                        />
                      </PieChart>
                    </ResponsiveContainer>
              </div>
            </Card>



            </div>
           
            <div className="grid grid-cols-3 gap-8">
              <div className="p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-6">Diagnosis Method Breakdown</h4>
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
              </div>

              <div className="p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">Historical SMA Type Distribution</h4>
                  <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                        <LineChart 
                          data={lineData} 
                          margin={{ top: 30, right: 20, left: 20, bottom: 5 }}>
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
              </div>

              {/* Specialists Chart */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-4">
                Distribution of Specialists by Category (%)
              </h4>
              <div className="h-[400px] -ml-20 mr-7">
              <ResponsiveContainer width="110%" height="80%">
                  <BarChart data={smaDistributionData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      tick={{ fontSize: 12 }}
                      label={{
                        value: "Percentage",
                        position: "insideBottom",
                        offset: -5,
                      }}
                    />
                    <YAxis
                      type="category"
                      dataKey="category"
                      width={200}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip />
                    
                    <Bar dataKey="percentage" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>

              </div>
            </div>

              {/* <Card className="p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">Geographic Impact</h4>
                  <div className="h-[400px]">

                  <ResponsiveContainer width="100%" height="100%">
                    <BubbleChart data={bubbledata} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <XAxis dataKey="x" name="Area" />
                      <YAxis dataKey="y" name="Days" />
                      <Tooltip formatter={(value, name, props) => `${props.payload.area}: ${props.payload.days} days`} />
                      <Legend />
                      
                      
                      <Bubble
                        dataKey="days"
                        name="Days"
                        fill="#8884d8"
                        size={(bubbledata) => bubbledata.days * 5}  // Multiplied by 5 to control bubble size
                      >
                        {bubbledata.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill || '#82ca9d'} />
                        ))}
                      </Bubble>
                    </BubbleChart>
                  </ResponsiveContainer>
                  </div>
              </Card> */}
              
              
              
              </div>



              <div className="grid grid-cols-1 gap-8">
                <Card className="p-6">
                  <StateScreeningMap/>
                </Card>
              </div>
          
          
          </div>


            
        );

        case 'pie':
          return (
            <div className="w-full space-y-8">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              
              <div className="grid grid-cols-3 gap-8">

              <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">Average Time between Diagnosis and First SMA Treatment</h4>
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
                </div>

                
              <div className="p-4">
                <h4 className="text-sm text-align-centre font-medium text-gray-700 mb-6">Insurance Coverage Status</h4>
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
              </div>

              <div className="p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-6">Types of Insurance Among Pediatrics and Adults with SMA</h4>
                <div className="aspect-[4/3] w-full" >
                <ResponsiveContainer width="100%" height="110%">
                    <BarChart layout="vertical" data={insuranceData1}>
                      
                      <YAxis dataKey="type" type="category" width={90} />
                      
                      <XAxis type="number" />
                      <Tooltip formatter={(value) => `${value}%`} />
                      
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>







                </div>
              </div>


              




              
              </div>


              <div className="grid grid-cols-3 gap-8">
                {/* Treatment Effectiveness Pie Chart */}


                <div className="p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">USE OF MULTIPLE TREATMENTS</h4>
                  <div className="aspect-[4/3] w-full" style={{ height: '300px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={SMA_Treatments}
                          cx="50%"
                          cy="50%"
                          innerRadius="60%"
                          outerRadius="80%"
                          paddingAngle={5}
                          dataKey="Percentage" // Correct data key for percentages
                          nameKey="SMA_Treatments" // Add the name key for tooltips and legends
                        >
                          {SMA_Treatments.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>

                        {/* Tooltip to display the correct percentage and treatment */}
                        <Tooltip
                          formatter={(value, _, props) => `${value}%`}
                          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                        />

                        {/* Adjusted Legend */}
                        <Legend
                          layout="horizontal"
                          align="center"
                          verticalAlign="bottom"
                          formatter={(value, entry) => entry.payload.SMA_Treatments}
                        />
                      </PieChart>
                    </ResponsiveContainer>







                  </div>
              </div>

                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">Hospitalization Rate</h4>
                  <div className="aspect-[4/3] w-full">
                    {/* <ResponsiveContainer width="90%" height="90%">
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
                    </ResponsiveContainer> */}

                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart 
                          data={hospitalizationData} 
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
                            dataKey="pediatrics"
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
                            dataKey="adults"
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
                </div>
  
                {/* Time to Treatment Trend Line Chart */}
                




                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">Mortality Rate</h4>
                  <div className="aspect-[4/3] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={mortality}
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
                          name="Mortality Rate"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>



              </div>

              <div className="grid grid-cols-2 items-center gap-8">
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-6">SMA impact on their lives</h4>
                  <div className="aspect-[4/3] w-full">
                    <ResponsiveContainer  width="120%" height="110%">
                    <BarChart
                      data={impactData}
                      layout="vertical" 
                      margin={{ top: 20, right: 30, left: 50, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" label={{ value: "Percentage", angle: 0, position: "insideBottom" }} />
                      <YAxis dataKey="impact" type="category" />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Legend />
                      <Bar dataKey="caregiver" name="Caregiver of a Child with SMA" fill="#82ca9d" />

                      <Bar dataKey="affectedAdult" name="Affected Adult with SMA" fill="#8884d8" />
                    </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-6">SMA impact on their lives</h4>
                <div className="aspect-[4/3] w-full">
                <ResponsiveContainer width="90%" height={400}>
                  <BarChart data={teledata}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="percentage" fill="#8884d8" name=""/>
                  </BarChart>
                  </ResponsiveContainer>
                </div>


                </div>
              </div>
  


              
            </div>
          );

      default:
        return null;
    }
  };
  const [hoveredSection, setHoveredSection] = useState(null);
  const getTranslateClass = (section) => {
    if (hoveredSection === 'metrics' && section !== 'metrics') return 'translate-x-3';
    if (hoveredSection === 'barriers') {
      if (section === 'metrics') return '-translate-x-3';
      if (section === 'opportunities') return 'translate-x-3';
    }
    if (hoveredSection === 'opportunities') {
      if (section === 'metrics' || section === 'barriers') return '-translate-x-3';
    }
    return '';
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
              Deep Dive
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
        {/* Key Metrics Section */}
        <div 
          className={`col-span-3 transition-transform duration-300 ease-in-out ${getTranslateClass('metrics')}`}
          onMouseEnter={() => setHoveredSection('metrics')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <LineChartIcon className="w-4 h-4" />
              Impact Measures
            </h3>
            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs leading-relaxed">{metric.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Barriers Section */}
        <div 
          className={`col-span-6 transition-transform duration-300 ease-in-out ${getTranslateClass('barriers')}`}
          onMouseEnter={() => setHoveredSection('barriers')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Key Barriers
            </h3>
            <KeyBarriers barriers={barriers} />
          </Card>
        </div>

        {/* Key Opportunities Section */}
        <div 
          className={`col-span-3 transition-transform duration-300 ease-in-out ${getTranslateClass('opportunities')}`}
          onMouseEnter={() => setHoveredSection('opportunities')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              Emerging Prospects
            </h3>
            <div className="space-y-3">
              {findings.map((finding, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold text-gray-900 mb-2">{finding.description}</div>
                    {finding.subpoints && finding.subpoints.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1">
                        {finding.subpoints.map((subpoint, subIdx) => (
                          <li key={subIdx} className="text-xs font-bold leading-relaxed">{subpoint}</li>
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
  const barrierColors = {
    physician: {
      background: 'bg-red-50',
      headerBg: 'bg-red-100',
      icon: 'text-red-600',
      borderColor: 'border-red-200'
    },
    system: {
      background: 'bg-blue-50',
      headerBg: 'bg-blue-100',
      icon: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    patient: {
      background: 'bg-green-50',
      headerBg: 'bg-green-100',
      icon: 'text-green-600',
      borderColor: 'border-green-200'
    }
  };

  return (
    <div className="space-y-6">
      {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => {
        const colors = barrierColors[key];

        return (
          <div 
            key={groupIdx} 
            className={`rounded-xl shadow-md overflow-hidden ${colors.background}`}
          >
            <div 
              className={`w-full flex items-center gap-3 px-5 py-4 ${colors.headerBg}`}
            >
              {key === 'physician' && <Stethoscope className={`w-5 h-5 ${colors.icon}`} />}
              {key === 'system' && <Building2 className={`w-5 h-5 ${colors.icon}`} />}
              {key === 'patient' && <User className={`w-5 h-5 ${colors.icon}`} />}
              <h3 className="text-base font-semibold capitalize text-gray-800">{key} Barriers</h3>
            </div>

            <div className={`p-5 border-t ${colors.borderColor}`}>
              <ul className="space-y-4">
                {barrierGroup.map((barrier, idx) => (
                  <li 
                    key={idx} 
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-4">
                      {barrier.subpoints && (
                        <ul className="space-y-2">
                          {barrier.subpoints.map((subpoint, subIdx) => (
                            <li 
                              key={subIdx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-purple-500 mt-1">•</span>
                              <span className="text-xs font-bold text-gray-700">{subpoint}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default JourneyStage;