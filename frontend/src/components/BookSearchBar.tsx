import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography  from '@mui/material/Typography'

import { useBooks } from '@/hooks/books';


function SearchInput({ ...params }) {
  return <TextField {...params} label="Search" />
}

function BookSearchBar() {
  const { books } = useBooks(1);

  return (
    <Autocomplete
      sx={{ flexGrow: 1, maxWidth: '50%' }}
      disablePortal
      options={books}
      size='small'
      renderOption={(params, book) => (
        <Typography {...params} key={book.id} sx={{ fontWeight: "bold" }} color='secondary'>{book.title}</Typography>
      )}
      renderInput={(params) => < SearchInput {...params} />}
      getOptionLabel={(bk) => bk.title}
      getOptionKey={(bk) => `${bk.title}-${bk.author}-${bk.coverPhotoURL}-${bk.readingLevel}`}
      componentsProps={{
        paper: { sx: { bgcolor: "primary.900" } }, // or static color like "#293346"
      }}
    />
  );
}


export default BookSearchBar
