import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { Box } from '@mui/material';
import image from "../assets/bottomLeftImage.png";

const ResizableImage = () => {
  const [width, setWidth] = useState(250); // Default width smaller
  const [height, setHeight] = useState(350); // Default height larger

  const handleResize = (e, data) => {
    setWidth(data.size.width);
    setHeight(data.size.height);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'background.default', // Theme background
      }}
    >
      <ResizableBox
        width={width}
        height={height}
        minConstraints={[100, 100]}
        maxConstraints={[600, 600]}
        axis="both"
        resizeHandles={['se', 'ne', 'sw', 'nw']}
        onResize={handleResize}
        style={{
          boxSizing: 'border-box',
        }}
      >
        <img
          src={image}
          alt="Sample"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </ResizableBox>
      <style>
        {`
          .react-resizable-handle {
            width: 16px; /* Smaller size */
            height: 16px; /* Smaller size */
            border-radius: 50%;
            background-color: white; /* White color */
            border: 2px solid #1976d2; /* Primary blue */
          }
          .react-resizable-handle:hover {
            cursor: pointer;
          }
        `}
      </style>
    </Box>
  );
};

export default ResizableImage;
