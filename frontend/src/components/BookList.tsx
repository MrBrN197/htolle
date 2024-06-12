// import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Unstable_Grid2'; // NOTE: https://github.com/mui/material-ui/issues/31244
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BookView from "@/components/BookView";
import { useEffect, useState } from 'react';

import { useBooks } from '@/hooks/books';
import { useSnackBar } from '@/hooks/snackBar';

const PAGE_LIMIT = 20;

export default function BookList() {
  const [page, setPage] = useState(1);

  const { notify } = useSnackBar();
  const { books, error, loading, total } = useBooks(page, PAGE_LIMIT); // TODO: replace with graphQl cursors

  useEffect(() => {
    if(error) {
        notify("Unable to load Books");
          }
  }, [ error, notify])

  if (error) {

    return <Stack sx={{ p: 2 }} direction='row' justifyContent='space-around' >
      <Box sx={{ p: 3, border: '2px dashed', borderRadius: '0.4rem' }}>
        <Typography sx={{ typography: { fontWeight: 'bold', textTransform: 'uppercase' }, maxWidth: '8rem' }} >
          books currently unavailable
        </Typography >
      </Box>
    </Stack >
  }

  if (loading) {
    return <Stack sx={{ p: 2 }} direction='row' justifyContent='space-around' >
      <Box sx={{ p: 3, border: '2px dashed', borderRadius: '0.4rem' }}>
        <Typography sx={{ typography: { fontWeight: 'bold', textTransform: 'uppercase' }, maxWidth: '8rem' }} >
          Loading Books
        </Typography >
      </Box>
    </Stack >
  }

  return (
    <>
      <Stack sx={{ pt: 6 }} direction='row' justifyContent='center' spacing={2}>
        <Pagination
          sx={{ fontWeight: '900' }}
          size='large'
          onChange={(_, page) => setPage(page)}
          count={Math.ceil(total / PAGE_LIMIT)}
          color="primary"
        />
      </Stack>
      <Grid sx={{ padding: 4 }} alignContent='center' justifyContent="center" container >
        {books.map(book => <BookView key={book.id} book={book} />)}
      </Grid >
    </>
  );
}
