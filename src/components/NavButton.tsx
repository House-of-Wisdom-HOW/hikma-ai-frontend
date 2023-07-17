import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode
  to: string
}

function NavButton({ children, ...props }: Props) {
  return (
    <Button color='secondary'>
      <NavLink
        {...props}
        className={({ isActive }) => (isActive ? 'transform transition duration-300 scale-125' : 'transform transition duration-300 scale-100')}
        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', })}
      >
        {children}
      </NavLink>
    </Button>
  );
};

export default NavButton;
