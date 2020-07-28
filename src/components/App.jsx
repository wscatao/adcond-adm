import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme} >
        <Header />
        Hello!
      </ThemeProvider>
    </div>
  );
}

export default App;
