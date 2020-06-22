import React, { useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  tooltip: {
    letterSpacing: "normal",
  },
});

function Tooltip({ clickLocation, hoveredCircle, classes }) {
  const tooltipText = useRef(null);

  const width = tooltipText.current ? tooltipText.current.getBBox().width : 0;
  const height = tooltipText.current ? tooltipText.current.getBBox().height : 0;
  const x = clickLocation.x * 2;
  const y = clickLocation.y * 2;
  const textX = x + width > 2 ? x - width : x;
  const textY = y;
  const pointRadius = 0.005;

  return [
    <circle cx={x} cy={y} fill="blue" r={pointRadius}></circle>,
    <text
      key="text"
      className={classes.tooltip}
      x={textX}
      y={textY}
      fontSize="0.05"
      fill="white"
      stroke="black"
      strokeWidth="0.002"
      ref={tooltipText}
    >
        x: {(clickLocation.x * 2 - 1).toFixed(4)} | 
        y: {(1  - clickLocation.y * 2).toFixed(4)} | 
        {hoveredCircle && `c: ${hoveredCircle.beam}/${hoveredCircle.numberOfBeams}`}
    </text>,
  ];
}

export default withStyles(styles)(Tooltip);
