import React, { useState } from "react";

const Rotate = ({ handleRotate }) => {
  const [isRotatingRight, setIsRotatingRight] = useState(true);

  const toggleRotation = () => {
    setIsRotatingRight(!isRotatingRight);
    handleRotate(isRotatingRight ? "right" : "left");
  };

  return (
    <div style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
      <button onClick={toggleRotation} style={buttonStyle}>
        Rotate
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "8px 16px",
  fontSize: "16px",
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  margin: "0 5px",
};

export default Rotate;
