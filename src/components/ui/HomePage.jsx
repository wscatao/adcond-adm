import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import videoSource from '../../assets/bgVideoWeb.mp4';
import bgImage from '../../assets/bgImgMobile.png';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: 'relative',
    zIndex: -1000,
    width: '100%',
    minHeight: '400px',
    overflow: 'hidden',
    top: 0,
    left: 0,
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  videoTag: {
    position: 'absolute',
    zIndex: -1000,
    top: -70,
    left: 0,
    heigth: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  overlay: {
    position: 'absolute',
    zIndex: -999,
    top: 0,
    left: 0,
    minHeight: '400px',
    width: '100%',
    backgroundColor: theme.palette.common.overlay,
  },
  mainContainer: {
    position: 'absolute',
    minHeight: '400px',
    top: 66,
    left: 0,
  },
  titleContainer: {
    marginLeft: '5em',
  },
  mainTitle: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '3em',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.2em',
    },
  },
  buttonCommon: {
    ...theme.typography.commonButton,
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    padding: '0.5em 3em 0.5em 3em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.videoContainer}>
        <div className={classes.overlay} />
        <video className={classes.videoTag} autoPlay loop muted playsinline>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>

      <Grid
        justify="flex-start"
        alignItems="center"
        className={classes.mainContainer}
        container
      >
        <Grid item>
          <Grid
            className={classes.titleContainer}
            container
            direction="column"
            spacing={1}
          >
            <Grid item>
              <Typography variant="h2" className={classes.mainTitle}>
                Cuidando do seu imóvel <br />
                desde 1991
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.buttonCommon}>
                Saiba Mais
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
