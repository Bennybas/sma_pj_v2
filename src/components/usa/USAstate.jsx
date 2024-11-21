import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const StateScreeningMap = () => {
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

  // Map state abbreviations to GeoJSON id
  const stateMapping = {
    AL: '01', AK: '02', AZ: '04', AR: '05', CA: '06',
    CO: '08', CT: '09', DE: '10', FL: '12', GA: '13',
    HI: '15', ID: '16', IL: '17', IN: '18', IA: '19',
    KS: '20', KY: '21', LA: '22', ME: '23', MD: '24',
    MA: '25', MI: '26', MN: '27', MS: '28', MO: '29',
    MT: '30', NE: '31', NV: '32', NH: '33', NJ: '34',
    NM: '35', NY: '36', NC: '37', ND: '38', OH: '39',
    OK: '40', OR: '41', PA: '42', RI: '44', SC: '45',
    SD: '46', TN: '47', TX: '48', UT: '49', VT: '50',
    VA: '51', WA: '53', WV: '54', WI: '55', WY: '56',
    DC: '11', AS: '60', GU: '66', MP: '69', PR: '72',
    UM: '74', VI: '78'
  };

  const stateScreening = {
    AL: 'No', AK: 'No', AZ: 'Yes', AR: 'Yes', CA: 'Yes',
    CO: 'Yes', CT: 'Yes', DE: 'Yes', FL: 'Yes', GA: 'No',
    HI: 'Yes', ID: 'No', IL: 'Yes', IN: 'Yes', IA: 'Yes',
    KS: 'Yes', KY: 'Yes', LA: 'Yes', ME: 'Yes', MD: 'Yes',
    MA: 'Yes', MI: 'Yes', MN: 'Yes', MS: 'No', MO: 'Yes',
    MT: 'No', NE: 'Yes', NV: 'No', NH: 'Yes', NJ: 'Yes',
    NM: 'No', NY: 'Yes', NC: 'Yes', ND: 'Yes', OH: 'Yes',
    OK: 'Yes', OR: 'No', PA: 'Yes', RI: 'Yes', SC: 'No',
    SD: 'Yes', TN: 'Yes', TX: 'Yes', UT: 'No', VT: 'Yes',
    VA: 'Yes', WA: 'Yes', WV: 'Yes', WI: 'Yes', WY: 'No',
    DC: 'Yes', 
    AS: 'Unknown', GU: 'Unknown', MP: 'Unknown', 
    PR: 'Unknown', UM: 'Unknown', VI: 'Unknown'
  };

  const getStateColor = (stateId) => {
    const stateCode = Object.keys(stateMapping).find(key => stateMapping[key] === stateId);
    if (!stateCode) return '#F0F4F8'; // Light gray if no match

    return stateScreening[stateCode] === 'Yes' ? '#90EEB1' :
           stateScreening[stateCode] === 'No'  ? '#FEB2B2' :
           stateScreening[stateCode] === 'Unknown' ? '#FAF089' :
           '#F0F4F8';
  };

  const getHoverColor = (stateId) => {
    const stateCode = Object.keys(stateMapping).find(key => stateMapping[key] === stateId);
    if (!stateCode) return '#CBD5E0'; // Slightly darker gray

    return stateScreening[stateCode] === 'Yes' ? '#48BB78' :
           stateScreening[stateCode] === 'No'  ? '#F56565' :
           stateScreening[stateCode] === 'Unknown' ? '#ECC94B' :
           '#CBD5E0';
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">State Screening Status</h2>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#90EEB1] mr-2"></div>
          <span>Screening: Yes</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#FEB2B2] mr-2"></div>
          <span>Screening: No</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#FAF089] mr-2"></div>
          <span>Unknown</span>
        </div>
      </div>
      <ComposableMap projection="geoAlbersUsa" className="w-full h-[500px]">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const stateId = geo.id;  // Use GeoJSON id
              const stateCode = Object.keys(stateMapping).find(key => stateMapping[key] === stateId);
              const stateColor = getStateColor(stateId);
              const hoverColor = getHoverColor(stateId);
              const centroid = geo.properties.centroid || [0, 0];
              const stateName = geo.properties.name;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={stateColor}
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: hoverColor, outline: "none" },
                    pressed: { fill: hoverColor, outline: "none" }
                  }}
                >
                  {stateCode && (
                    <>
                      <text
                        x={centroid[0]}
                        y={centroid[1] - 10}
                        textAnchor="middle"
                        style={{ 
                          fontSize: 10, 
                          fill: "black", 
                          fontWeight: "bold", 
                          pointerEvents: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          paintOrder: "stroke"
                        }}
                      >
                        {stateName}
                      </text>
                      <text
                        x={centroid[0]}
                        y={centroid[1]}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ 
                          fontSize: 12, 
                          fill: "black", 
                          fontWeight: "bold", 
                          pointerEvents: "none",
                          stroke: "white",
                          strokeWidth: 3,
                          paintOrder: "stroke"
                        }}
                      >
                        {stateCode}
                      </text>
                    </>
                  )}
                </Geography>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default StateScreeningMap;