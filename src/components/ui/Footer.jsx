import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
  },
  footerF: {
    backgroundColor: theme.palette.common.texto,
    textAlign: 'center',
    color: 'white',
    minHeight: '4em',
    padding: '0.5em',
  },
  links: {
    color: theme.palette.common.texto,
    fontSize: '1em',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  outButtonNumber: {
    ...theme.typography.outlinedButton,
    padding: '0 5em',
  },
  outButtonEmail: {
    ...theme.typography.outlinedButton,
    padding: '0 3.7em',
  },
  buttonIcon: {
    marginRight: '0.3em',
  },
  gridRight: {
    paddingTop: '5em',
    paddingRight: '10em',
  },
  borda: {
    border: '1px solid red',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { setValue } = props;

  return (
    <footer className={classes.footer}>
      <Grid container>

      </Grid>
      <Container disableGutters maxWidth="false" className={classes.footerF}>
        ADCOND Administração de Condomínios
      </Container>
    </footer>
  );
}

PropTypes.Footer = {
  setValue: PropTypes.func.isRequired,
};
