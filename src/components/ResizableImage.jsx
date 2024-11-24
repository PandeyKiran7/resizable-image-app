import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import image from "../assets/image.png";

const ResizableRotatableImage = () => {
  const [size, setSize] = useState({ width: 250, height: 350 });
  const [rotation, setRotation] = useState(0); // Rotation in degrees
  const boxRef = useRef(null); // Reference to the resizable box
  const isDraggingRef = useRef(false); // Track resizing state

  const handleResizeStart = (e, corner) => {
    e.preventDefault();
    isDraggingRef.current = true;

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;

    const onMouseMove = (event) => {
      if (boxRef.current && isDraggingRef.current) {
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;

        setSize({
          width: Math.max(100, corner.includes("right") ? startWidth + deltaX : startWidth - deltaX),
          height: Math.max(100, corner.includes("bottom") ? startHeight + deltaY : startHeight - deltaY),
        });
      }
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleRotate = (direction) => {
    setRotation((prev) => prev + (direction === "right" ? 15 : -15)); // Rotate in 15-degree increments
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
            objectFit: "contain",
            pointerEvents: "none", // Prevent interaction during rotation/resizing
          }}
        />

        {/* Corners for resizing */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map(
          (corner) => (
            <div
              key={corner}
              onMouseDown={(e) => handleResizeStart(e, corner)}
              style={{
                position: "absolute",
                width: "16px",
                height: "16px",
                backgroundColor: "#1976d2",
                borderRadius: "50%",
                cursor: "grab",
                zIndex: 10, // Ensure corners are on top
                [corner.includes("top") ? "top" : "bottom"]: "-8px",
                [corner.includes("left") ? "left" : "right"]: "-8px",
              }}
            ></div>
          )
        )}
      </div>

      {/* Rotate Buttons */}
      <Box sx={{ position: "absolute", top: 20, display: "flex", gap: 2 }}>
        <button onClick={() => handleRotate("left")}>Rotate Left</button>
        <button onClick={() => handleRotate("right")}>Rotate Right</button>
      </Box>
    </Box>
  );
};

export default ResizableRotatableImage;
