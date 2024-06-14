import { createTheme } from '@mui/material/styles';
import yellow from '@mui/material/colors/yellow';

declare module '@mui/material/styles' {

  interface PaletteColor {
    main: string,
    light: string,
    dark: string,
    contrastText: string,
    '700'?: string,
    '900'?: string,
  }
  interface PaletteColorOptions {
    main?: string,
    light?: string,
    dark?: string,
    contrastText?: string,
    '700'?: string,
    '900'?: string,
  }
  // allow configuration using `createTheme`
  interface Palette {
    blues: {
      main?: string,
      light?: string, // Turquoise light
      dark?: string,
      steel?: string,
      turquoise?: { 1: string, 2: string }
    },
    yellow: {
      main?: string,
      dark?: string,  // Yellow Dark
      red?: string,       // Orange Red
    },
    readingLevel?: {
      A: string,
      B: string,
      C: string,
      D: string,
      E: string,
      F: string,
      G: string,
      H: string,
      I: string,
      J: string,
    },
  }

  interface PaletteOptions {
    blues: {
      main?: string,
      light?: string, // Turquoise light
      dark?: string,
      steel?: string,
      turquoise?: { 1: string, 2: string }
    },
    yellow: {
      main?: string,
      dark?: string,  // Yellow Dark
      red?: string,       // Orange Red
    },
    readingLevel?: {
      A: string,
      B: string,
      C: string,
      D: string,
      E: string,
      F: string,
      G: string,
      H: string,
      I: string,
      J: string,
    },
  }
}


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
      light: yellow[400],
      main: '#fabd33',
      dark: '#faad00',  // Yellow Dark
      900: '#f76434',   // Orange Red
    },
    blues: {
      light: '#cffafa',
      main: '#5acccc',
      dark: '#38b8b8',
      steel: '#335c6e',
      turquoise: {
        1: '#38b8b8',
        2: '#38b8b8',
      }
    },
    yellow: {
      main: "#fabd33",
      dark: '#faad00',  // Yellow Dark
      red: '#f76434',   // Orange Red
    },

    readingLevel: {
      A: '#f76434', // Orange Red
      B: '#f76434',
      C: '#f76434',
      D: '#f76434',
      E: "#4aa088", // Teal
      F: "#4aa088",
      G: "gray",  //
      H: "gray",
      I: "gray",
      J: "gray",
    },
  },
});

export default theme;
