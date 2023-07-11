import { Box, Typography } from '@mui/material';
import List from '../components/List';
import bg from '../pics/bg-3.png';

function About() {
  return (
    <Box
      sx={{
        height: '100vh', // Set the height to 100% of the viewport height
        width: '100vw', // Set the width to 100% of the viewport width
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'bottom left',
      }}
      className='absolute top-0 flex justify-start items-start'
      component='div'>
      <Box
        className='flex flex-col my-auto gap-4 sm:gap-8 justify-around p-4
        sm:p-6 h-650 w-96 sm:w-600 rounded text-left sm:text-center bg-brown text-white'
        component='div'
        sx={{
          boxShadow: '5px 5px 8px #000000',
          '@media (max-width: 600px)': {
            width: '90vw',
            height: 'auto',
            margin: 'auto'
          },
        }}>
        <Typography variant='h4' sx={{ '@media (max-width: 600px)': { fontSize: '1.8rem' } }}>
          Hikma AI by House Of Wisdom
        </Typography>
        <Typography variant='h5' sx={{ '@media (max-width: 600px)': { fontSize: '1.4rem' } }}>
          Mission Statement
        </Typography>
        <List />
        <List />
        <List />
      </Box>
    </Box>

  );
}

export default About;
