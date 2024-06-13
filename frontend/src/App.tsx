import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import BookSearchBar from '@/components/BookSearchBar'
import BookList from '@/components/BookList'
import AppBar from '@/components/AppBar';
import { SnackBar } from "@/hooks/snackBar";

function App() {

  return (
    <>
      <SnackBar />

      <Box >
        <AppBar />
        <Container sx={{ pt: 10 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction='column'>
              <BookSearchBar />
            </Stack>
          </Stack>
          <BookList />
        </Container>
      </Box>
    </>
  )
}

export default App





