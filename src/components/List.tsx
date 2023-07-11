import { Typography } from '@mui/material';

function List() {
  return (
    <Typography
          variant='body1'
          className='text-left'
          sx={{
            '@media (max-width: 600px)': {
              fontSize: '0.9rem', // Adjust the font size for smaller screens
            },
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptate nostrum
          neque natus sunt beatae perspiciatis necessitatibus quaerat. Iusto placeat mollitia est
          neque nobis cum fuga blanditiis illo hic tempora.
        </Typography>
  );
}

export default List;
