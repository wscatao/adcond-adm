import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header value={value} setValue={setValue} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <div style={{ height: '2000px' }}>Home</div>}
            />
            <Route exact path="/about" component={() => <div>About</div>} />
            <Route
              exact
              path="/local"
              component={() => <div>Local/Contact</div>}
            />
            <Route exact path="/services" component={() => null} />
            <Route
              exact
              path="/residencial"
              component={() => <div>Residencial</div>}
            />
            <Route
              exact
              path="/commercial"
              component={() => <div>Commercial</div>}
            />
            <Route
              exact
              path="/condominium"
              component={() => <div>Condominium</div>}
            />
            <Route exact path="/price" component={() => <div>Price</div>} />
          </Switch>
          <Footer setValue={setValue} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
