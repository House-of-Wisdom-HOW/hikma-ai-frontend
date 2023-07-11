import { useState, MouseEvent } from 'react';
import { Typography, AppBar, Toolbar, Box, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../pics/logo.png';
import NavButton from '../components/NavButton';
import { NavLink } from 'react-router-dom';

const renderNavItems = (isMobile: boolean, open: boolean, handleClick: (event: MouseEvent<HTMLButtonElement>) => void) => {
  if (isMobile) {
    return (
      <IconButton
        size="large"
        edge="start"
        color="secondary"
        aria-label="menu"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
    );
  }

  return (
    <Box>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/about">About</NavButton>
      <NavButton to="/add">Add</NavButton>
    </Box>
  );
};

function Nav() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="py-1.5" component="div" position="sticky">
        <Toolbar component="div">
          {/* logo and title */}
          <Box className="h-16 w-16 mr-2" component="img" src={logo} alt="book" />
          <Typography className="grow" component="div" variant="h4" color="secondary">
            Hikma AI
          </Typography>

          {/* nav links */}
          {renderNavItems(isMobile, open, handleClick)}

          {/* mobile mode nav menu */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/about">About</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/add">Add</NavLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
