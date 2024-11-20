import React from 'react';

const RadialDiagram = () => {
  // Common styles for circles and connectors
  const circleStyle = {
    fill: '#4682B4',
    filter: 'url(#lighting)'
  };
  
  const textStyle = {
    fill: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    textAnchor: 'middle'
  };
  
  const descriptionStyle = {
    fill: '#333',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    textAnchor: 'middle'
  };

  return (
    <div className="w-full max-w-4xl">
      <svg viewBox="0 0 800 400" className="w-full h-full">
        <defs>
          {/* Lighting effect filter */}
          <filter id="lighting" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lightingColor="#bbbbbb" result="specular">
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular" />
            <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>

        {/* Title */}
        <text x="40" y="40" className="text-2xl font-bold" fill="#333">5 Item – Creative Radial Diagram</text>

        {/* Center circle */}
        <g transform="translate(400, 200)">
          <circle r="45" {...circleStyle} fill="#1a4b77" />
          <text y="5" {...textStyle}>Sample</text>
          <text y="25" {...textStyle}>Text</text>

          {/* Top circle and text */}
          <g transform="translate(0, -120)">
            <circle r="40" {...circleStyle} />
            <text y="5" {...textStyle}>Sample</text>
            <text y="25" {...textStyle}>Text</text>
            <text y="-60" {...descriptionStyle}>This is a sample text Insert</text>
            <text y="-40" {...descriptionStyle}>your desired text here</text>
          </g>

          {/* Right circle and text */}
          <g transform="translate(120, 0)">
            <circle r="40" {...circleStyle} />
            <text y="5" {...textStyle}>Sample</text>
            <text y="25" {...textStyle}>Text</text>
            <text x="80" y="5" {...descriptionStyle}>This is a sample text</text>
            <text x="80" y="25" {...descriptionStyle}>Insert your desired</text>
            <text x="80" y="45" {...descriptionStyle}>text here</text>
          </g>

          {/* Bottom right circle and text */}
          <g transform="translate(70, 100)">
            <circle r="40" {...circleStyle} />
            <text y="5" {...textStyle}>Sample</text>
            <text y="25" {...textStyle}>Text</text>
            <text x="80" y="5" {...descriptionStyle}>This is a sample text Insert</text>
            <text x="80" y="25" {...descriptionStyle}>your desired text here</text>
          </g>

          {/* Bottom left circle and text */}
          <g transform="translate(-70, 100)">
            <circle r="40" {...circleStyle} />
            <text y="5" {...textStyle}>Sample</text>
            <text y="25" {...textStyle}>Text</text>
            <text x="-80" y="5" {...descriptionStyle}>This is a sample text Insert</text>
            <text x="-80" y="25" {...descriptionStyle}>your desired text here</text>
          </g>

          {/* Left circle and text */}
          <g transform="translate(-120, 0)">
            <circle r="40" {...circleStyle} />
            <text y="5" {...textStyle}>Sample</text>
            <text y="25" {...textStyle}>Text</text>
            <text x="-80" y="5" {...descriptionStyle}>This is a sample text</text>
            <text x="-80" y="25" {...descriptionStyle}>Insert your desired</text>
            <text x="-80" y="45" {...descriptionStyle}>text here</text>
          </g>

          {/* Connectors */}
          <path d="M0,-45 L0,-80" stroke="#1a4b77" strokeWidth="15" />
          <path d="M45,0 L80,0" stroke="#1a4b77" strokeWidth="15" />
          <path d="M32,32 L50,70" stroke="#1a4b77" strokeWidth="15" />
          <path d="M-32,32 L-50,70" stroke="#1a4b77" strokeWidth="15" />
          <path d="M-45,0 L-80,0" stroke="#1a4b77" strokeWidth="15" />
        </g>
      </svg>
    </div>
  );
};

export default RadialDiagram;