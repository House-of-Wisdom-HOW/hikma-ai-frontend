import { Box, Typography } from '@mui/material';
import List from '../components/List';
import bg from '../pics/bg.png';

function About() {
  // TODO: Add link to discord, github, etc, along with details on contributing.
  return (
    // Main wrapper
    <Box className='h-screen'
      sx={{
        '@media (max-height: 700px)': {
          height: 'max-content'
        }
      }}
    >
      {/* bg image */}
      <Box
        className='flex justify-center items-start lg:justify-end px-3'
        sx={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'top left',
        }}
        component='div'>
        {/* The box with info */}
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
            Hikma AI
          </Typography>
          <Typography variant='h5' sx={{ '@media (max-width: 1024px)': { fontSize: '1.2rem' } }}>
            By House of Wisdom
          </Typography>

          Hikma AI is a database to collect and organize AI tools to attain Hikmah. The inspiration behind this project is to provide a one-stop location for finding existing AI tools or inspirations for future AI tools.
          <List />
          This is an open source project, everyone is welcome to contribute to our github repository: https://github.com/House-of-Wisdom-HOW/hikma-ai-frontend.
          <List />
          This project is inspired from future-tools: https://www.futuretools.io/.
          <List />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
