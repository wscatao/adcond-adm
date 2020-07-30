import { createMuiTheme } from '@material-ui/core/styles';

const texto = '#4F6272';
const claro = '#8A99A6';
const background = '#F0F4F7';
const destaque = '#2196F3';
const destaqueHover = '#1A76BF';

export default createMuiTheme({
  palette: {
    common: {
      texto: `${texto}`,
      claro: `${claro}`,
      background: `${background}`,
      destaque: `${destaque}`,
      destaqueHover: `${destaqueHover}`
    },
    primary: {
      main: `${background}`,
    },
    background: {
      default: `${background}`
    }
  }
});
