import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logotipo-alpha.png';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "3em"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.outlinedButton,
    marginLeft: "50px",
    marginRight: "25px",
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <img src={logo} alt="Logo da Adcond Adm. de Condomínios" className={classes.logo} />
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
              <Tab className={classes.tab} component={Link} to="/about" label="Sobre" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contato" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Localização" />
              <Tab className={classes.tab} label="Serviços" />
            </Tabs>
            <Button component={Link} to="/price" variant="outlined" color="secondary" className={classes.button}>Cotação Online</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
