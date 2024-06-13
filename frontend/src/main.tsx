import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme.ts";
import './index.css'

const GRAPHQL_SERVER_URL = 'http://localhost:4000/graphql' // TODO: read from Global Config

const client = new ApolloClient({
  uri: GRAPHQL_SERVER_URL,
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}

import { GraphQlContext } from '@/data/graphQl.ts'
import DrawerProvider from '@/hooks/drawer.ts';
import SnackBarProvider from "@/hooks/snackBar";

import ReadingListProvider from '@/hooks/readingList.ts';

ReactDOM.createRoot(document
  .getElementById('root')!)
  .render(
    <React.StrictMode>
      <GraphQlContext.Provider value={client}>
        <ThemeProvider theme={theme}>
          <SnackBarProvider>
            <DrawerProvider >
              <ReadingListProvider>
                <App />
              </ReadingListProvider>
            </DrawerProvider >
          </SnackBarProvider>
        </ThemeProvider>
      </GraphQlContext.Provider>
    </React.StrictMode>
  );
