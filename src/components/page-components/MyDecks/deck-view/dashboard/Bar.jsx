import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const XAxis = ({ top, bottom, left, right, height, scale }) => {
  const axis = useRef(null);

  useEffect(() => {
    d3.select(axis.current).call(d3.axisBottom(scale));
  });

  return (
    <g
      className="axis x"
      ref={axis}
      transform={`translate(${left}, ${height - bottom})`}
    />
  );
};

const YAxis = ({ top, bottom, left, right, scale }) => {
  const axis = useRef(null);

  useEffect(() => {
    d3.select(axis.current).call(d3.axisLeft(scale));
  });

  return (
    <g className="axis y" ref={axis} transform={`translate(${left}, ${top})`} />
  );
};

const Rect = ({ data, x, y, height, top, bottom, xData, yData }) => {
  return (
    <g transform={`translate(${x(data[xData])}, ${y(data[yData])})`}>
      <rect
        width={x.bandwidth()}
        height={height - bottom - top - y(data[yData])}
        fill="lightblue"
      />
      <text
        transform={`translate(${x.bandwidth() / 2}, ${-2})`}
        textAnchor="middle"
        alignmentBaseline="baseline"
        fill="grey"
        fontSize="10"
      >
        {data[yData]}
      </text>
    </g>
  );
};

const Bar = props => {
  const x = d3
    .scaleBand()
    .range([0, props.width - props.left - props.right])
    .domain(props.data.map(d => d[props.xData]))
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .range([props.height - props.top - props.bottom, 0])
    .domain([0, d3.max(props.data, d => d[props.yData])]);

  return (
    <>
      <svg width={props.width} height={props.height}>
        <XAxis
          scale={x}
          top={props.top}
          bottom={props.bottom}
          left={props.left}
          right={props.right}
          height={props.height}
        />
        <YAxis
          scale={y}
          top={props.top}
          bottom={props.bottom}
          left={props.left}
          right={props.right}
        />
        <g transform={`translate(${props.left}, ${props.top})`}>
          {props.data.map((d, i) => (
            <Rect
              data={d}
              x={x}
              y={y}
              top={props.top}
              bottom={props.bottom}
              height={props.height}
              xData={props.xData}
              yData={props.yData}
            />
          ))}
        </g>
      </svg>
    </>
  );
};

export default Bar;
