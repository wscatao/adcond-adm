import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Header />
        Hello!
      </ThemeProvider>
    </div>
  );
}

export default App;
