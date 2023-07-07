import { Typography, Box, Grid } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import Article from '../components/Article';
import DUMMY_DATA from '../data.json';

function Main() {
  return (
    <Box className='p-8'>
      <Box className='flex justify-between'>
        <Typography variant='h6'>Showing 3 of 100 Total Tools.</Typography>
        <Typography>
          Sort by: Recent <SortIcon />
        </Typography>
      </Box>

      <Grid container className='mt-10' rowGap={6} >
        {DUMMY_DATA.map(({ src, alt, title, description, id }) => (
          <Article src={src} alt={alt} title={title} description={description} key={id}/>
        ))}
      </Grid>

    </Box>
  );
}

export default Main;
