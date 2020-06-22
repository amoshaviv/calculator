import React, { useState, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  circle: {
    "&:hover": {
      fill: "red",
    },
  },
});

function Circles({ circles, onCircleClick, onCircleBlur, classes }) {
  const [selectedCircleElement, setSelectedCircleElement] = useState(null);

  const handleCircleClick = (circleElement, circle) => {
    if (circleElement) {
        if (selectedCircleElement) selectedCircleElement.setAttribute('fill', 'rgba(0,0,0,0.1)');
        circleElement.setAttribute('fill', 'yellow');
        setSelectedCircleElement(circleElement);
    }
    onCircleClick(circle);
  };

  return circles.map((circle) => (
    <circle
      className={classes.circle}
      onClick={(ev) => handleCircleClick(ev.target, circle)}
      onBlur={(ev) => console.log(ev.target)}
      key={`circle-a${circle.numberOfBeams}-b${circle.beam}-r${circle.ring}`}
      fill="rgba(0,0,0,0.1)"
      cx={circle.cx}
      cy={circle.cy}
      r={circle.radius}
    />
  ));
}

export default withStyles(styles)(Circles);
