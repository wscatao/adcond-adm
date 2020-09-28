import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
  },
  footerF: {
    backgroundColor: theme.palette.common.texto,
    textAlign: 'center',
    color: 'white',
    height: '2em',
    padding: '0.2em',
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
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
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
      <Container disableGutters maxWidth="false" className={classes.footerF}>
        ADCOND Administração de Condomínios
      </Container>
    </footer>
  );
}
