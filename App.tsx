import React from 'react';

import {SchemeProvider} from './src/context/SchemeContext';
import {MainScreen} from './src/screens/MainScreen';

const App = () => {
  return (
    <SchemeProvider>
      <MainScreen />
    </SchemeProvider>
  );
};

export default App;
