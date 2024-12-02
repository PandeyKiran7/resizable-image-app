import React, { useState, useRef } from "react";

const Resize = ({ size, setSize, boxRef }) => {
  const isDraggingRef = useRef(false);

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

  return (
    <>
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => (
        <div
          key={corner}
          onMouseDown={(e) => handleResizeStart(e, corner)}
          style={{
            position: "absolute",
            width: "16px",
            height: "16px",
            backgroundColor: "#1976d2",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 10,
            [corner.includes("top") ? "top" : "bottom"]: "2px",
            [corner.includes("left") ? "left" : "right"]: "1px",
          }}
        ></div>
      ))}
    </>
  );
};

export default Resize;
