import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import image from "../assets/image.png";
import Rotate from "../pages/Rotate"; 
import Resize from "../pages/Resize";

const ResizableRotatableImage = () => {
  const [size, setSize] = useState({ width: 250, height: 350 });
  const [rotation, setRotation] = useState(0); 
  const boxRef = useRef(null); 

  const handleRotate = (direction) => {
    setRotation((prev) => prev + (direction === "right" ? 15 : -15)); 
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        ref={boxRef}
        style={{
          width: size.width,
          height: size.height,
          transform: `rotate(${rotation}deg)`,
          position: "relative",
          border: "1px solid grey",
          transformOrigin: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt="Resizable and Rotatable"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none", 
          }}
        />


        <Resize size={size} setSize={setSize} boxRef={boxRef} />
      </div>

 
      <Rotate handleRotate={handleRotate} /> 
    </Box>
  );
};

export default ResizableRotatableImage;
