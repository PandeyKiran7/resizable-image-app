import React from 'react';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';
import ResizableRotatableImage from './components/ResizableImage';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <ResizableRotatableImage />
    </ThemeProviderWrapper>
  );
};

export default App;
