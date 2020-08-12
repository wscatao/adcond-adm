import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

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
    height: '4em',
  },
  logoContainer: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.outlinedButton,
    marginLeft: '50px',
    marginRight: '25px',
  },
  menu: {
    backgroundColor: theme.palette.common.texto,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
  },
  icons: {
    marginRight: '10px'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const options = [
    {name: 'Condomínios Residenciais', link: '/residencial'},
    {name: 'Condomínios Comerciais', link: '/commercial'},
    {name: 'Acesso do Condômino', link: '/condominium'},
  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIcons = (i) => {
    if (i === 0) return <HomeWorkRoundedIcon classes={{ root: classes.icons }} />
    if (i === 1) return <ApartmentRoundedIcon classes={{ root: classes.icons }} />
    if (i === 2) return <AccountBoxRoundedIcon classes={{ root: classes.icons }} />
    return undefined
  }

  useEffect(() => {
    switch (pathname) {
      case '/':
        if ( value !== 0 ) setValue(0); 
        break;
      case '/about':
        if ( value !== 1 ) setValue(1);
        break;
      case '/local':
        if ( value !== 2 ) setValue(2);
        break;
      case '/services':
        if ( value !== 3 ) setValue(3);
        break;
      case '/residencial':
        if ( value !== 3 ) setValue(3);
        break;
      case '/commercial':
        if ( value !== 3 ) setValue(3);
        break;
      case '/condominium':
        if ( value !== 3 ) setValue(3);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Button
              component={Link}
              to='/'
              onClick={() => setValue(0)}
              className={classes.logoContainer}
              disableRipple
            >
              <img
                src={logo}
                alt='Logo da Adcond Adm. de Condomínios'
                className={classes.logo}
              />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to='/'
                label='Home'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/about'
                label='Sobre'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/local'
                label='Localização'
              />
              <Tab
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}
                className={classes.tab}
                component={Link}
                to='/services'
                label='Serviços'
              />
            </Tabs>
            <Button
              component={Link}
              to='/price'
              variant='outlined'
              color='secondary'
              className={classes.button}
            >
              Cotação Online
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              classes={{ paper: classes.menu }}
            >
              {options.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  onClick={handleClose}
                  classes={{ root: classes.menuItem }}
                >
                  {handleIcons(i)}
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
