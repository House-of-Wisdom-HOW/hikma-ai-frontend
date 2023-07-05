import { Typography, AppBar, Toolbar, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import logo from '../pics/logo.png';

function Nav() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E1B15D', // brown
      },
      secondary: {
        main: '#FFFFFF', // white
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar className='py-1.5' component='nav' >
        <Toolbar component="div">
          {/* logo and title */}
          <Box className='h-16 w-16 mr-2' component='img' src={logo} alt="book" />
          <Typography className='grow' component='div' variant='h4' color='secondary'>Hikma AI</Typography>

          {/* nav links warpped around a button */}
          <Box>
            <Button color='secondary'><NavLink style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })} to="/">Home</NavLink></Button>
            <Button color='secondary'><NavLink style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })} to="/about">About</NavLink></Button>
            <Button color='secondary'><NavLink style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })} to="/add">Add</NavLink></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Nav;
