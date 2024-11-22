import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { Box } from '@mui/material';
import image from "../assets/image.png"  
const ResizableImage = () => {
  const [width, setWidth] = useState(250); 
  const [height, setHeight] = useState(350); 

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
        backgroundColor: 'transparent', 
      }}
    >
      <ResizableBox
        width={width}
        height={height}
        minConstraints={[100, 100]}
        maxConstraints={[600, 600]}
        axis="both"
        lockAspectRatio={true} 
        resizeHandles={['se', 'ne', 'sw', 'nw']}
        onResize={handleResize}
        style={{
          boxSizing: 'border-box',
          border:'1px solid grey'
        }}
      >
        <img
          src={image}
          alt="Sample"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', 
            borderRadius: '10px',
            backgroundColor: 'transparent', 
          }}
        />
        
      </ResizableBox>
      <style>
        {`
          .react-resizable-handle {
            width: 16px; 
            height: 16px; 
            border-radius: 50%;
            background-color: white; 
            border: 2px solid #1976d2;
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
