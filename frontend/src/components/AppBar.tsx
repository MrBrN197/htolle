import MuiAppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton' 
import Box from '@mui/material/Box' 
import Toolbar from '@mui/material/Toolbar' 
import Drawer from '@mui/material/Drawer' 

import MenuIcon from "@mui/icons-material/Menu";

import BookReadingList from '@/components/BookReadingList'

import { useDrawer } from '@/hooks/drawer';

export default function AppBar() {
  const { isOpen, toggle } = useDrawer();

  return <MuiAppBar elevation={1} color="primary" >
    <Toolbar >
      <Drawer open={isOpen}>
        <BookReadingList />
      </Drawer>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
        <IconButton
          onClick={() => toggle()}
          size="large"
          aria-label="reading list current student"
          aria-controls="menu-appbar"
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Toolbar >
  </MuiAppBar >
}
