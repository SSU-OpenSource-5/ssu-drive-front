import { createTheme } from '@mui/material/styles';
import { COLORS } from './constants/styles/color';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.accent,
    },
    // secondary: {
    //   main: COLORS.,
    // },
    error: {
      main: '#000',
    },
  },
});

export default theme;
