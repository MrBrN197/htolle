export interface Book {
  id: string,
  title: string,
  author: string,
  coverPhotoURL: string,
  readingLevel: string,
}


declare module '@mui/material/styles' {
  interface Theme {
  }
  interface ThemeOptions {
    blues?: {
      steel?: string;
    };
  }
}
