import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Mulish",
  },
  palette: {
    primary: {
      main: '#5acccc',
      light: '#cffafa', // Turquoise light
      dark: '#38b8b8', // Turquoise dark 2
      900: "#335c6e", // Steel Blue
    },
    secondary: {
      main: '#fabd33',
      700: '#faad00',  // Yellow Dark
      900: '#f76434',       // Orange Red
    },
  },


});

export default theme;
