import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import logo from '../pics/logo.png';
import NavButton from '../components/NavButton';

function Nav() {
  return (
    <AppBar className='py-1.5' component='div' position='sticky' >
      <Toolbar component="div">
        {/* logo and title */}
        <Box className='h-16 w-16 mr-2' component='img' src={logo} alt='book' />
        <Typography className='grow' component='div' variant='h4' color='secondary'>Hikma AI</Typography>

        {/* nav links */}
        <Box>
          <NavButton to='/'>Home</NavButton>
          <NavButton to='/about'>About</NavButton>
          <NavButton to='/add'>Add</NavButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
