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
      <NavLink {...props} style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' })}>
        {children}
      </NavLink>
    </Button>
  );
};

export default NavButton;
