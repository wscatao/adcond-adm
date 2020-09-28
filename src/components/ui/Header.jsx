import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import MenuIcon from '@material-ui/icons/Menu';
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
    [theme.breakpoints.down('md')]: {
      height: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '2em',
    },
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
    marginRight: '10px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
  },
  drawerIcon: {
    height: '30px',
    width: '30px',
  },
  drawer: {
    backgroundColor: theme.palette.common.texto,
  },
  drawerListText: {
    ...theme.typography.tab,
    color: 'white',
  },
  drawerSubheader: {
    color: 'white',
  },
  listIcon: {
    color: 'white',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { value, setValue } = props;

  const options = [
    {
      name: 'Condomínios Residenciais',
      link: '/residencial',
      activeIndex: 3,
      icon: <HomeWorkRoundedIcon className={classes.listIcon} />,
    },
    {
      name: 'Condomínios Comerciais',
      link: '/commercial',
      activeIndex: 3,
      icon: <ApartmentRoundedIcon className={classes.listIcon} />,
    },
    {
      name: 'Acesso do Condômino',
      link: '/condominium',
      activeIndex: 3,
      icon: <AccountBoxRoundedIcon className={classes.listIcon} />,
    },
  ];

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
    if (i === 0)
      return <HomeWorkRoundedIcon classes={{ root: classes.icons }} />;
    if (i === 1)
      return <ApartmentRoundedIcon classes={{ root: classes.icons }} />;
    if (i === 2)
      return <AccountBoxRoundedIcon classes={{ root: classes.icons }} />;
    return undefined;
  };

  const menuOptions = [
    {
      name: 'Página Inicial',
      link: '/',
      activeIndex: 0,
      icon: <HomeRoundedIcon className={classes.listIcon} />,
    },
    {
      name: 'Sobre',
      link: '/about',
      activeIndex: 1,
      icon: <WorkRoundedIcon className={classes.listIcon} />,
    },
    {
      name: 'Localização',
      link: '/local',
      activeIndex: 2,
      icon: <PhoneRoundedIcon className={classes.listIcon} />,
    },
    {
      name: 'Serviços',
      link: '/services',
      activeIndex: 3,
      'aria-controls': 'simple-menu',
      'aria-haspopup': true,
      onClick: handleClick,
    },
  ];

  useEffect(() => {
    [...menuOptions, ...options].forEach((option) => {
      switch (window.location.pathname) {
        case `${option.link}`:
          if (value !== option.activeIndex) setValue(option.activeIndex);
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, options, setValue]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        {menuOptions.map((tab) => (
          <Tab
            key={tab.name}
            className={classes.tab}
            component={Link}
            to={tab.link}
            label={tab.name}
            aria-controls={tab['aria-controls']}
            aria-haspopup={tab['aria-haspopup']}
            onClick={tab.onClick}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/price"
        variant="outlined"
        color="secondary"
        className={classes.button}
      >
        Cotação Online
      </Button>
      <Menu
        id="simple-menu"
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
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <List>
          {[...menuOptions, ...options].map((opt) => {
            if (opt.link === '/services') {
              return (
                <ListSubheader
                  key={opt.link}
                  className={classes.drawerSubheader}
                >
                  Serviços
                </ListSubheader>
              );
            }

            return (
              <ListItem
                key={opt.name}
                button
                onClick={() => setOpenDrawer(false)}
                component={Link}
                to={opt.link}
              >
                <ListItemIcon>{opt.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  className={classes.drawerListText}
                >
                  {opt.name}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Button
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.logoContainer}
              disableRipple
            >
              <img
                src={logo}
                alt="Logo da Adcond Adm. de Condomínios"
                className={classes.logo}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

Header.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
