import { Typography, Box, Grid } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import Article from '../components/Article';
import drippi from '../pics/DrippiAi.png';
import magicast from '../pics/MagicastAi.png';
import poster from '../pics/PosterStudio.png';

const DUMMY_DATA = [
  {
    src: drippi,
    alt: 'Drippi.ai',
    title: 'Drippi.ai',
    description: 'A tool to automate personalized Twitter outreach.',
    id: 1
  },
  {
    src: magicast,
    alt: 'Magicast.ai',
    title: 'Magicast.ai',
    description: 'A platform to generate personalized podcasts.',
    id: 2
  },
  {
    src: poster,
    alt: 'Poster Studio',
    title: 'Poster Studio',
    description: 'A tool to generate ads and social creatives.',
    id: 3
  },
];

function Main() {
  return (
    <Box className='p-8'>
      <Box className='flex justify-between'>
        <Typography variant='h6'>Showing 3 of 100 Total Tools.</Typography>
        <Typography>
          Sort by: Recent
          <SortIcon />
        </Typography>
      </Box>

      <Grid container>
        {DUMMY_DATA.map(({ src, alt, title, description, id }) => (
          <Article src={src} alt={alt} title={title} description={description} key={id}/>
        ))}
      </Grid>

    </Box>
  );
}

export default Main;
