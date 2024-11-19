import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

const SankeyDiagram = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1100;
    const height = 400;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };

    svg.attr("width", width)
       .attr("height", height);

    // Softer, more pleasant color palette
    const colorScale = d3.scaleOrdinal()
      .domain([
        "Patients", "Male", "Female", "Boy", "Male", 
        "Girl", "Female", "PCP", "Pediatrician", "Neurologist"
      ])
      .range([
        "#E3F2FD", "#BBDEFB", "#F8BBD0", "#C8E6C9", "#B3E5FC", 
        "#FFCDD2", "#FFEBEE", "#80DEEA", "#B2DFDB", "#C8E6C9"
      ]);

    const data = {
      nodes: [
        { name: "Patients", value: 100 },
        { name: "Male", value: 60 },
        { name: "Female", value: 40 },
        { name: "Children", value: 40 },
        { name: "Adult", value: 20 },
        { name: "Children", value: 30 },
        { name: "Adult", value: 10 },
        { name: "PCP", value: 50 },
        { name: "Pediatrician", value: 50 },
        { name: "Neurologist", value: 65 }
      ],
      links: [
        { source: 0, target: 1, value: 60 },
        { source: 0, target: 2, value: 40 },
        { source: 1, target: 3, value: 40 },
        { source: 1, target: 4, value: 20 },
        { source: 2, target: 5, value: 30 },
        { source: 2, target: 6, value: 10 },
        { source: 3, target: 7, value: 10 },
        { source: 3, target: 8, value: 30 },
        { source: 4, target: 7, value: 20 },
        { source: 5, target: 7, value: 10 },
        { source: 5, target: 8, value: 20 },
        { source: 6, target: 7, value: 10 },
        { source: 7, target: 9, value: 30 },
        { source: 8, target: 9, value: 35 }
      ]
    };

    const sankeyGenerator = sankey()
      .nodeWidth(40)          
      .nodePadding(30)        
      .extent([
        [margin.left, margin.top],
        [width - margin.right, height - margin.bottom]
      ]);

    const { nodes, links } = sankeyGenerator(data);

    const chart = svg.append("g");

    // Links with subtle curvature
    const link = chart.append("g")
      .selectAll(".link")
      .data(links)
      .enter().append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", d => colorScale(d.source.name))
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", d => Math.max(1, d.width))
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .attr("stroke-opacity", 0.8)
          .attr("stroke-width", d.width * 1.2);
        
        // Enhanced tooltip
        const tooltip = chart.append("g")
          .attr("class", "link-tooltip");
        
        tooltip.append("rect")
          .attr("x", (d.source.x1 + d.target.x0) / 2 - 80)
          .attr("y", (d.source.y0 + d.target.y0) / 2 - 25)
          .attr("width", 160)
          .attr("height", 25)
          .attr("fill", "white")
          .attr("stroke", "#ccc")
          .attr("rx", 4);

        tooltip.append("text")
          .attr("x", (d.source.x1 + d.target.x0) / 2)
          .attr("y", (d.source.y0 + d.target.y0) / 2 - 8)
          .attr("text-anchor", "middle")
          .attr("fill", "#333")
          .text(`${d.source.name} → ${d.target.name}: ${d.value}`)
          .style("font-size", "12px");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .attr("stroke-opacity", 0.6)
          .attr("stroke-width", Math.max(1, d.width));
        chart.selectAll(".link-tooltip").remove();
      });

    // Enhanced nodes
    const node = chart.append("g")
      .selectAll(".node")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    // Node rectangles with softer corners
    node.append("rect")
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => colorScale(d.name))
      .attr("rx", 4)  // Rounded corners
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .attr("opacity", 0.9)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this).attr("opacity", 1);
        
        // Enhanced node tooltip
        const tooltip = chart.append("g")
          .attr("class", "node-tooltip");
        
        tooltip.append("rect")
          .attr("x", d.x0 + (d.x1 - d.x0) / 2 - 60)
          .attr("y", d.y0 - 30)
          .attr("width", 120)
          .attr("height", 25)
          .attr("fill", "white")
          .attr("stroke", "#ccc")
          .attr("rx", 4);

        tooltip.append("text")
          .attr("x", d.x0 + (d.x1 - d.x0) / 2)
          .attr("y", d.y0 - 15)
          .attr("text-anchor", "middle")
          .attr("fill", "#333")
          .text(`${d.name}: ${d.value}`)
          .style("font-size", "12px");
      })
      .on("mouseout", function(event, d) {
        d3.select(this).attr("opacity", 0.9);
        chart.selectAll(".node-tooltip").remove();
      });

    // Improved node labels
    node.append("text")
      .attr("x", d => (d.x1 - d.x0) / 2)
      .attr("y", d => (d.y1 - d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(d => d.name)
      .attr("fill", "#333")
      .attr("font-weight", "500")
      .style("font-size", "14px")
      .style("pointer-events", "none");

  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <h4 className="text-sm font-medium text-gray-700 mb-4">Patient Flow</h4>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SankeyDiagram;
