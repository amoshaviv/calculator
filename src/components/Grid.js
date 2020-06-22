import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { getGridLines } from "../utils/calculations";
const gridLines = getGridLines();

const styles = (theme) => ({
  line: {
    
  },
  text: {
    letterSpacing: "normal",
  },
});

function Grid({ classes }) {
  return (
    <>
      {gridLines.map((gridLine, idx) => ([
          <line
            key={`grid-line-${idx}`}
            x1={gridLine.x1}
            y1={gridLine.y1}
            x2={gridLine.x2}
            y2={gridLine.y2}
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="0.001"
            className={classes.line}
          />,
          <text
            key={`grid-line-text-${idx}`}
            className={classes.text}
            x={gridLine.x1}
            y={2 - gridLine.y1}
            fontSize="0.02"
          >
            {((gridLine.y1 || gridLine.x1) - 1).toFixed(2)}
          </text>
      ]))}
      )}
    </>
  );
}

export default withStyles(styles)(Grid);
