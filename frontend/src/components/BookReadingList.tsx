import Box from '@mui/material/Box';
import { useReadingList } from '@/hooks/readingList';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { useDrawer } from '@/hooks/drawer';
import { useSnackBar } from '@/hooks/snackBar';

interface Props {
  title: string,
  author: string,
  onRemove: () => void,
}

function ReadingListBookView({ title, author, onRemove }: Props) {
  return <Box >
    <Stack sx={{ py: 1 }} justifyContent='space-between' alignItems='center' direction='row'>
      <div >
        <Typography sx={{ px: 2 }} textAlign='left' >{title}</Typography >
        <Typography sx={{ px: 2 }} textAlign='left' >{author}</Typography >
      </div>

      <div>
        <IconButton onClick={() => onRemove()}  >
          <Icon fontSize='medium' color='secondary'>remove_circle</Icon>
        </IconButton>
      </div>
    </Stack>
    <Divider />
  </Box>


}

export default function BasicGrid() {

  const { books, removeBook } = useReadingList();
  const { notify } = useSnackBar();

  function handleRemoveBook(id: string) {
    removeBook(id);
    notify('Removed from Reading list');
  }

  const { toggle } = useDrawer();

  return (
    <Box sx={{ width: '30vw', bgcolor: "primary.900", flexGrow: 1 }}>
      <Button sx={{ m: 2, mx: 4 }} variant="outlined" color='secondary' onClick={() => toggle()}>Close Reading List</Button>

      {(books.length == 0) ?
        <Stack sx={{ p: 2 }} direction='row' justifyContent='space-around' >
          <Box sx={{ p: 3, border: '2px dashed', borderRadius: '0.4rem', borderColor: 'secondary.main' }}>
            <Typography color='secondary' sx={{ typography: { fontWeight: 'bold', textTransform: 'uppercase' }, maxWidth: '8rem' }} >Student's Reading List is Empty</Typography >
          </Box>
        </Stack >
        :
        books.map(book => <ReadingListBookView key={book.id} title={book.title} author={book.author} onRemove={() => handleRemoveBook(book.id)} />)
      }
    </Box >
  );
}
