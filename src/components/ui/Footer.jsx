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
    marginTop: '1em',
  },
  links: {
    color: theme.palette.common.texto,
    fontSize: '1em',
    fontWeight: 'bold',
    textDecoration: 'none',
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
}));

export default function Footer(props) {
  const classes = useStyles();
  const { setValue } = props;

  return (
    <footer className={classes.footer}>
      <Grid container alignItens="center">
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItens="center"
            className={classes.borda}
          >
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  component={Link}
                  to="/"
                  onClick={() => setValue(0)}
                  className={classes.links}
                >
                  Página Inicial
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/about"
                  onClick={() => setValue(1)}
                  className={classes.links}
                >
                  Sobre
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/local"
                  onClick={() => setValue(2)}
                  className={classes.links}
                >
                  Localização
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item className={classes.links}>
                  Serviços
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/residencial"
                  onClick={() => setValue(3)}
                  className={classes.links}
                >
                  Condomínios Residenciais
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/commercial"
                  className={classes.links}
                  onClick={() => setValue(3)}
                >
                  Condomínios Comerciais
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/condominium"
                  className={classes.links}
                  onClick={() => setValue(3)}
                >
                  Acesso do Condômino
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid
            container
            justify="center"
            direction="row"
            alignItens="center"
            className={classes.borda}
          >
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Hidden smDown>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.outButtonNumber}
                    >
                      <PhoneIcon className={classes.buttonIcon} />
                      (11) 5181-0774
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="secondary"
                      className={classes.outButtonEmail}
                    >
                      <MailIcon className={classes.buttonIcon} />
                      adcond@uol.com.br
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container disableGutters maxWidth="false" className={classes.footerF}>
        <Grid container justify="center" alignItens="center" spacing={1}>
          <Grid item>ADCOND Administração de Condomínios</Grid>
        </Grid>
      </Container>
    </footer>
  );
}

PropTypes.Footer = {
  setValue: PropTypes.func.isRequired,
};
