import React from 'react';
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
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="space-around">
        <Grid container xs={12} md={6}>
          <Grid Item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.links}>
                Página Inicial
              </Grid>
              <Grid item component={Link} to="/about" className={classes.links}>
                Sobre
              </Grid>
              <Grid item component={Link} to="/local" className={classes.links}>
                Localização
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.links}>
                Serviços
              </Grid>
              <Grid
                item
                component={Link}
                to="/residencial"
                className={classes.links}
              >
                Condomínios Residenciais
              </Grid>
              <Grid
                item
                component={Link}
                to="/commercial"
                className={classes.links}
              >
                Condomínios Comerciais
              </Grid>
              <Grid
                item
                component={Link}
                to="/condominium"
                className={classes.links}
              >
                Acesso do Condômino
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid
            container
            alignItems="flex-end"
            md={6}
            direction="column"
            spacing={2}
            className={classes.gridRight}
          >
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
          </Grid>
        </Hidden>
      </Grid>
      <Container disableGutters maxWidth="false" className={classes.footerF}>
        ADCOND Administração de Condomínios
      </Container>
    </footer>
  );
}
