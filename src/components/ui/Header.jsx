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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
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
import MyLocationRoundedIcon from '@material-ui/icons/MyLocationRounded';
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
    marginLeft: 'auto'
  },
  drawerIcon: {
    height: '30px',
    width: '30px',
  },
  drawer: {
    backgroundColor: theme.palette.common.texto
  },
  drawerListText: {
    ...theme.typography.tab,
    color: 'white'
  },
  drawerSubheader: {
    color: 'white'
  },
  listIcon: {
    color: 'white'
  }
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const options = [
    { name: 'Condomínios Residenciais', link: '/residencial' },
    { name: 'Condomínios Comerciais', link: '/commercial' },
    { name: 'Acesso do Condômino', link: '/condominium' },
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

  useEffect(() => {
    switch (pathname) {
      case '/':
        if (value !== 0) setValue(0);
        break;
      case '/about':
        if (value !== 1) setValue(1);
        break;
      case '/local':
        if (value !== 2) setValue(2);
        break;
      case '/services':
        if (value !== 3) setValue(3);
        break;
      case '/residencial':
        if (value !== 3) setValue(3);
        break;
      case '/commercial':
        if (value !== 3) setValue(3);
        break;
      case '/condominium':
        if (value !== 3) setValue(3);
        break;
      default:
        break;
    }
  }, [pathname, value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to='/' label='Home' />
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
        anchor='right'
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItem button onClick={() => setOpenDrawer(false)} component={Link} to='/' >
            <ListItemIcon>
              <HomeRoundedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.drawerListText} >Página Inicial</ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} component={Link} to='/about' >
            <ListItemIcon>
              <WorkRoundedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.drawerListText} >Sobre</ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} component={Link} to='/local' >
            <ListItemIcon>
              <PhoneRoundedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.drawerListText} >Contato</ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} component={Link} to='/local' >
            <ListItemIcon>
              <MyLocationRoundedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.drawerListText} >Localização</ListItemText>
          </ListItem>
          <ListSubheader className={classes.drawerSubheader} >
            Serviços
          </ListSubheader>
          <ListItem button onClick={() => setOpenDrawer(false)} component={Link} to='/residencial' >
            <ListItemIcon>
              <HomeWorkRoundedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.drawerListText} >Condomínios Residenciais</ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} component={Link} to='/commercial' >
            <ListItemIcon>
              <ApartmentRoundedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.drawerListText} >Condomínios Comerciais</ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} component={Link} to='/condominium' >
            <ListItemIcon>
              <AccountBoxRoundedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText disableTypography className={classes.drawerListText} >Acesso do Condômino</ListItemText>
          </ListItem>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
