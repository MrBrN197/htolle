import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import BookSearchBar from '@/components/BookSearchBar'
import BookList from '@/components/BookList'
import AppBar from '@/components/AppBar';

function App() {

  return (
    <>
      <Box >
        <AppBar />
        <Container sx={{ pt: 10 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <BookSearchBar />
          </Stack>
          <BookList />
        </Container>
      </Box>
    </>
  )
}

export default App





