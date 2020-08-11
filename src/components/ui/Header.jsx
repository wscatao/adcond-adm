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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (pathname === '/' && value !== 0) return setValue(0);
    if (pathname === '/about' && value !== 1) return setValue(1);
    if (pathname === '/local' && value !== 2) return setValue(2);
    if (pathname === '/services' && value !== 3) return setValue(3);
    return undefined;
  }, [value, pathname]);

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
              <MenuItem
                component={Link}
                to='/residencial'
                onClick={handleClose}
                classes={{ root: classes.menuItem }}
              >
                <HomeWorkRoundedIcon classes={{ root: classes.icons }} />
                Condomínios Residenciais
              </MenuItem>
              <MenuItem
                component={Link}
                to='/commercial'
                onClick={handleClose}
                classes={{ root: classes.menuItem }}
              >
                <ApartmentRoundedIcon classes={{ root: classes.icons }} />
                Condomínios Comerciais
              </MenuItem>
              <MenuItem
                component={Link}
                to='/condominium'
                onClick={handleClose}
                classes={{ root: classes.menuItem }}
              >
                <AccountBoxRoundedIcon classes={{ root: classes.icons }} />
                Acesso do Condômino
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
