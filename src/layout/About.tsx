import { Box, Typography } from '@mui/material';
import List from '../components/List';
import bg from '../pics/bg.png';

function About() {
  return (
    <Box className='h-screen'
      sx={{
        '@media (max-height: 700px)': {
          height: 'max-content'
        }
      }}
    >
      <Box
        className='flex justify-center items-start lg:justify-end px-3'
        sx={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'top left',
        }}
        component='div'>
        <Box
          className='flex flex-col mt-12 gap-4 justify-around p-4 rounded text-center bg-brown text-white
          max-w-xl lg:p-6  lg:w-600 lg:mr-20 lg:gap-8 '
          component='div'
          sx={{
            boxShadow: '5px 5px 6px #000000',
            height: '40rem',
            '@media (max-width: 1024px)': {
              width: '90vw',
              height: 'auto',
            },
          }}>
          <Typography variant='h4' sx={{ '@media (max-width: 1024px)': { fontSize: '1.6rem' } }}>
            Hikma AI by House Of Wisdom
          </Typography>
          <Typography variant='h5' sx={{ '@media (max-width: 1024px)': { fontSize: '1.2rem' } }}>
            Mission Statement
          </Typography>
          <List />
          <List />
          <List />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
