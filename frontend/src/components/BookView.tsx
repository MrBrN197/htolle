import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Icon from "@mui/material/Icon"

import { type Book } from '@/types/queries';
import { useSnackBar } from '@/hooks/snackBar';
import { useReadingList } from '@/hooks/readingList';

interface Props {
  book: Book,
}


function readingLevelColor(level: string) {
  switch (level) {
    case 'A': return "readingLevel.A"
    case 'B': return "readingLevel.B"
    case 'C': return "readingLevel.C"
    case 'D': return "readingLevel.D"
    case 'E': return "readingLevel.E"
    case 'F': return "readingLevel.F"
    case 'G': return "readingLevel.G"
    case 'H': return "readingLevel.H"
    case 'I': return "readingLevel.I"
    case 'J': return "readingLevel.J"
  }

}

export default function BookView({ book }: Props) {
  const { title, author, coverPhotoURL, readingLevel } = book;

  const { notify: push, open } = useSnackBar();
  const { findBook, addBook, removeBook } = useReadingList();

  const handleAddBook = () => {
    push("Added to Reading list");
    addBook(book);
  };


  const handleRemoveBook = () => {
    push("Remove from Reading list");
    removeBook(book.id);
  }

  return (
    <Card sx={{ m: 2, borderRadius: 4, width: 210 }} elevation={1}>
      <Stack justifyContent="space-between" direction="column">
        <Card sx={{ flexGrow: 0, flexShrink: 1, overflow: 'hidden' }} elevation={0}>
          <img src={coverPhotoURL} />
        </Card>
        <Stack
          direction='column'
          justifyContent='space-between'
          sx={{ p: 2, flexGrow: 1 }}
        >
          <Stack flexGrow={1} justifyContent='space-between' sx={{ height: '6rem', overflow: 'hidden' }}>
            <Typography sx={{ pb: 1 }} variant="body1" component="div">
              {title}
            </Typography>
            <Divider />
          </Stack>

          <Typography sx={{ pt: 1, pb: 2 }} variant="body2">
            by {author}
          </Typography>
          <
            Stack
            direction="row"
            alignItems='center'
            justifyContent='space-between'
          >
            <Stack direction='row' spacing={1} alignItems='baseline'>
              <Chip 
                variant="outlined" 
                sx={{
                  textalign: 'center',
                  width: 30,
                  borderColor: readingLevelColor(book.readingLevel),
                  height: 30,
                  flexGrow: 0,
                  fontWeight: '900',
                  borderWidth: 4,
                  color: readingLevelColor(book.readingLevel),
                }} 
                label={readingLevel} size="small" 
              />
            </Stack>


            {!findBook(book.id) ?
              <IconButton sx={{ p: 0 }} disabled={open} onClick={handleAddBook} >
                <Icon fontSize='medium' color='primary'>add_circle</Icon>
              </IconButton>
              :
              <IconButton sx={{ p: 0 }} disabled={open} onClick={handleRemoveBook} >
                <Icon fontSize='medium' color='secondary'>remove_circle</Icon>
              </IconButton>
            }
          </Stack>
        </Stack >
      </Stack>
    </Card >
  );
}


