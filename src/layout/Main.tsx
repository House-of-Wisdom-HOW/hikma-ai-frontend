import { Typography, Box, Grid, IconButton } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import Article from '../components/Article';
import DUMMY_DATA from '../data.json';

function Main() {
  return (
    <Box className='p-8'>
      <Box className='flex sm:justify-between sm:flex-row flex-col text-center'>
        <Typography variant='h6'>Showing 3 of 100 Total Tools.</Typography>
        <Typography>
          <span className='text-grey'>Sort by:</span> Recent  <IconButton aria-label='Sort'><SortIcon /></IconButton>
        </Typography>
      </Box>

      <Grid container className='mt-10' rowGap={6}>
        {DUMMY_DATA.map(({ src, alt, title, description, id }) => (
          <Article src={src} alt={alt} title={title} description={description} key={id}/>
        ))}
      </Grid>

    </Box>
  );
}

export default Main;
