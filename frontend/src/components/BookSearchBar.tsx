import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { createFilterOptions } from '@mui/material/Autocomplete';

import { type Book } from "@/types/queries"

const filterOptions = createFilterOptions<Book>({
  limit: 10,
})

import { styled } from '@mui/material';
import { useBooks } from '@/hooks/books';
import { forwardRef } from 'react';



const StyledInput = styled(InputBase)(({ theme }) => ({
  paddingInline: '1rem',
  borderRadius: 8,
  padding: 4,
  width: '20rem',
  backgroundColor: theme.palette.common.white,
  // width: '100%',
  '& input': {
    borderRadius: 4,
    padding: 8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: `1px solid rgba(9.3,0.9,0.2,0.1)`,
    '&:focus': {
      boxShadow: `0px 0px 0px 3px ${theme.palette.yellow.red}4a`,
      borderColor: `${theme.palette.secondary.dark}`,
    },
  },



}));

const SearchInput = forwardRef<null, AutocompleteRenderInputParams>(({ inputProps }, ref) => {
  return <Box ref={ref} sx={{ pb: 0.4, width: 'fit-content' }}>
    <StyledInput inputProps={inputProps} inputRef={inputProps.ref} placeholder='Search Books' ></StyledInput>
  </Box>
})


function BookSearchBar() {
  const { books, setFilter } = useBooks(1);

  return (
    <div>
      <Autocomplete
        onChange={(_, book) => setFilter(book?.title || null)}
        filterOptions={filterOptions}
        sx={{ flexGrow: 1, maxWidth: '50%' }}
        options={books}
        size='medium'
        renderOption={({ ...props }, book) =>
          <li {...props} style={{gap: "1rem"}} key={book.id}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  flexGrow: 0,
                  borderRadius: 2,
                  p: 0.4,
                  overflow: 'hidden',
                  bgcolor: 'primary.light',
                }}
              >
                <img src={book.coverPhotoURL} />
              </Box>
              <Box
                sx={{
                  width: 600,
                  flexGrow: 1,
                }}
              >
                <Typography variant='body2'> {book.title} </Typography>
                <Typography variant="caption" color='text.secondary' > {book.author} </Typography>
              </Box>
          </li>
        }
        renderInput={(params) =>
          <SearchInput ref={params.InputProps.ref} {...params} />
        }
        getOptionLabel={(bk) => bk.title}
        getOptionKey={(bk) => `${bk.title}-${bk.author}-${bk.coverPhotoURL}-${bk.readingLevel}`}
        componentsProps={{
          paper: { sx: {} },
        }}
      />
    </div>
  );
}


export default BookSearchBar
