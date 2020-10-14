import { createMuiTheme } from '@material-ui/core/styles';

const texto = '#4F6272';
// const claro = '#8A99A6';
const background = '#F0F4F7';
const destaque = '#2196F3';
const destaqueHover = '#1A76BF';

export default createMuiTheme({
  palette: {
    common: {
      texto: `${texto}`,
      overlay: 'rgba(0,0,0,0.3)',
    },
    primary: {
      main: `${background}`,
    },
    secondary: {
      main: `${destaque}`,
      dark: `${destaqueHover}`,
    },
    background: {
      default: `${background}`,
    },
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    outlinedButton: {
      borderRadius: '50px',
      textTransform: 'none',
      fontWeight: '700',
      letterSpacing: '0.1rem',
    },
    commonButton: {
      borderRadius: '50px',
      textTransform: 'none',
      fontWeight: '700',
      letterSpacing: '0.1rem',
    },
  },
});
