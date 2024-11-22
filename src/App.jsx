import React from 'react';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';
import ResizableImage from './components/ResizableImage';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <ResizableImage />
    </ThemeProviderWrapper>
  );
};

export default App;
