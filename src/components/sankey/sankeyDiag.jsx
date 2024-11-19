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

    // Enhanced color palette with more distinct colors
    const colorScale = d3.scaleOrdinal()
      .domain([
        "Patients", "Male", "Female", "Boy", "Teen", "Male", 
        "Girl", "Female", "Adult", "PCP", "Pediatrician", "Neurologist"
      ])
      .range([
        "#1565C0", "#2196F3", "#F50057", "#4CAF50", "#03A9F4", 
        "#E91E63", "#FF5722", "#009688", "#FF9800", "#795548", 
        "#9C27B0", "#607D8B"
      ]);

    const data = {
      nodes: [
        { name: "Patients", value: 100 },
        { name: "Male", value: 60 },
        { name: "Female", value: 40 },
        { name: "Children", value: 25 },
        { name: "Teen", value: 15 },
        { name: "Adult", value: 20 },
        { name: "Children", value: 20 },
        { name: "Teen", value: 10 },
        { name: "Adult", value: 10 },
        { name: "PCP", value: 30 },
        { name: "Pediatrician", value: 35 },
        { name: "Neurologist", value: 65 }
      ],
      links: [
        { source: 0, target: 1, value: 60 },
        { source: 0, target: 2, value: 40 },
        { source: 1, target: 3, value: 25 },
        { source: 1, target: 4, value: 15 },
        { source: 1, target: 5, value: 20 },
        { source: 2, target: 6, value: 20 },
        { source: 2, target: 7, value: 10 },
        { source: 2, target: 8, value: 10 },
        { source: 3, target: 9, value: 10 },
        { source: 3, target: 10, value: 15 },
        { source: 4, target: 9, value: 5 },
        { source: 4, target: 11, value: 10 },
        { source: 5, target: 9, value: 10 },
        { source: 5, target: 11, value: 10 },
        { source: 6, target: 9, value: 10 },
        { source: 6, target: 10, value: 10 },
        { source: 7, target: 9, value: 5 },
        { source: 7, target: 11, value: 5 },
        { source: 8, target: 9, value: 5 },
        { source: 8, target: 11, value: 5 },
        { source: 9, target: 11, value: 20 },
        { source: 10, target: 11, value: 25 }
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

    // Enhanced links with gradient and smoother hover effect
    const link = chart.append("g")
      .selectAll(".link")
      .data(links)
      .enter().append("path")
      .attr("class", "link")
      .attr("d", sankeyLinkHorizontal())
      .attr("fill", "none")
      .attr("stroke", d => {
        const gradient = svg.append("linearGradient")
          .attr("id", `link-gradient-${d.source.index}-${d.target.index}`)
          .attr("gradientUnits", "userSpaceOnUse")
          .attr("x1", d.source.x1)
          .attr("y1", (d.source.y0 + d.source.y1) / 2)
          .attr("x2", d.target.x0)
          .attr("y2", (d.target.y0 + d.target.y1) / 2);
        
        gradient.append("stop").attr("offset", "0%").attr("stop-color", colorScale(d.source.name));
        gradient.append("stop").attr("offset", "100%").attr("stop-color", colorScale(d.target.name));
        
        return `url(#link-gradient-${d.source.index}-${d.target.index})`;
      })
      .attr("stroke-opacity", 0.5)
      .attr("stroke-width", d => Math.max(1, d.width))
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-opacity", 0.8)
          .attr("stroke-width", d.width * 1.5);
        
        const tooltip = chart.append("g")
          .attr("class", "link-tooltip");
        
        tooltip.append("rect")
          .attr("x", (d.source.x1 + d.target.x0) / 2 - 100)
          .attr("y", (d.source.y0 + d.target.y0) / 2 - 30)
          .attr("width", 200)
          .attr("height", 30)
          .attr("fill", "rgba(255,255,255,0.9)")
          .attr("stroke", "#bbb")
          .attr("rx", 6)
          .attr("filter", "url(#drop-shadow)");

        tooltip.append("text")
          .attr("x", (d.source.x1 + d.target.x0) / 2)
          .attr("y", (d.source.y0 + d.target.y0) / 2 - 10)
          .attr("text-anchor", "middle")
          .attr("fill", "#333")
          .text(`${d.source.name} → ${d.target.name}: ${d.value} (${((d.value / 100) * 100).toFixed(1)}%)`)
          .style("font-size", "13px")
          .style("color", "#00000")
          .style("font-weight", "500");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-width", Math.max(1, d.width));
        chart.selectAll(".link-tooltip").remove();
      });

    // Add drop shadow filter
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "shadow");
    
    filter.append("feOffset")
      .attr("dx", 2)
      .attr("dy", 2);
    
    filter.append("feComponentTransfer")
      .append("feFuncA")
      .attr("type", "linear")
      .attr("slope", 0.3);

    filter.append("feMerge")
      .html(`
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      `);

    const node = chart.append("g")
      .selectAll(".node")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

    node.append("rect")
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => colorScale(d.name))
      .attr("rx", 6)
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .attr("opacity", 0.9)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 1)
          .attr("stroke-width", 3);
        
        const tooltip = chart.append("g")
          .attr("class", "node-tooltip");
        
        tooltip.append("rect")
          .attr("x", d.x0 + (d.x1 - d.x0) / 2 - 80)
          .attr("y", d.y0 - 35)
          .attr("width", 160)
          .attr("height", 30)
          .attr("fill", "rgba(255,255,255,0.9)")
          .attr("stroke", "#bbb")
          .attr("rx", 6)
          .attr("filter", "url(#drop-shadow)");

        tooltip.append("text")
          .attr("x", d.x0 + (d.x1 - d.x0) / 2)
          .attr("y", d.y0 - 18)
          .attr("text-anchor", "middle")
          .attr("fill", "#333")
          .text(`${d.name}: ${d.value}`)
          .style("font-size", "13px")
          .style("font-weight", "500");
      })
      .on("mouseout", function(event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("opacity", 0.9)
          .attr("stroke-width", 2);
        chart.selectAll(".node-tooltip").remove();
      });

      node.append("text")
      .attr("x", d => (d.x1 - d.x0) / 2)
      .attr("y", d => (d.y1 - d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(d => `${d.name}\n${((d.value / 100) * 100).toFixed(1)}%`)
      .attr("fill", "#ffffff")
      .attr("font-weight", "600")
      .style("font-size", "12px")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.3)")
      .style("pointer-events", "none");

  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <h3 className="text-sm font-bold text-gray-700 mb-4">Initial Assessment to Specialist Referral Flow</h3>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SankeyDiagram;