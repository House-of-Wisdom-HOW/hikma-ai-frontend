import { Typography } from '@mui/material';

function List() {
  return (
    <Typography
      variant='body1'
      className='text-left'
      sx={{
        '@media (max-width: 1024)': {
          fontSize: '1rem', // Adjust the font size for smaller screens
        },
      }}
    >
    </Typography>
  );
}

export default List;
