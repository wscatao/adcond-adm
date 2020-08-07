import { createMuiTheme } from '@material-ui/core/styles';

// const texto = '#4F6272';
// const claro = '#8A99A6';
const background = '#F0F4F7';
const destaque = '#2196F3';
// const destaqueHover = '#1A76BF';

export default createMuiTheme({
  palette: {
    primary: {
      main: `${background}`
    },
    secondary: {
      main: `${destaque}`
    },
    background: {
      default: `${background}`
    }
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    outlinedButton: {
      borderRadius: "50px",
      textTransform: "none",
      fontWeight: "700",
      letterSpacing: "0.1rem"
    }
  }
});
