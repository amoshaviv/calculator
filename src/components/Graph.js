import React, { useState, useRef } from "react";
import Grid from "./Grid";
import Circles from "./Circles";
import Tooltip from "./Tooltip";

function Graph({ config, circles }) {
  const svg = useRef(null);
  const [clickLocation, setClickLocation] = useState(null);
  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleBlur = (ev) => {
    setClickLocation(null);
  }

  const onCircleClick = (circle) => {
      setHoveredCircle(circle);
  }

  const handleClick = (ev) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const x = (ev.clientX - rect.left) / rect.width; 
    const y = (ev.clientY - rect.top) / rect.height;
    

    setClickLocation({ x,y });
    
    //  Prevent default
    ev.preventDefault();
    ev.stopPropagation();
  };

  return (
    <svg
      onBlur={handleBlur}
      onClick={handleClick}
      viewBox="0 0 2 2"
      xmlns="http://www.w3.org/2000/svg"
      ref={svg}
    >
      <circle cx="1" cy="1" r="1" fill="#fefefe" />
      <Circles circles={circles} onCircleClick={onCircleClick} />
      {clickLocation && <Tooltip hoveredCircle={hoveredCircle} clickLocation={clickLocation}/>}
      {/* <Grid /> */}
    </svg>
  );
}

export default Graph;
