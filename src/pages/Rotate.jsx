import React, { useState } from "react";

const Rotate = ({ handleRotate, rotation }) => {
  const [angle, setAngle] = useState(rotation);

  const handleSliderChange = (e) => {
    const newAngle = parseInt(e.target.value);
    setAngle(newAngle);
    handleRotate(newAngle); 
  };

  return (
    <div style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-30%)", zIndex: 10 }}>
      <div style={{ marginTop: "10px" }}>
        <label>Set Rotation Angle:</label>
        <input
          type="range"
          min="0"
          max="360"
          step="1"
          value={angle}
          onChange={handleSliderChange}
          style={sliderStyle}
        />
        <span style={{ marginLeft: "10px" }}>{angle}°</span>
      </div>
    </div>
  );
};

const sliderStyle = {
  width: "200px",
  margin: "10px 0",
};

export default Rotate;
