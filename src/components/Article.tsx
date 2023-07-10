import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

interface Props {
  src: string
  image: string
  title: string
  description: string
}

function Article({ src, image, title, description }: Props) {
  const handleCardClick = () => {
    window.open(src, '_blank');
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ backgroundColor: '#FAFAFA', boxShadow: '2px 3px 4px #e1b15d90' }}
        className='text-center h-full mx-auto 2xl:w-64 xl:w-10/12 sm:w-85 w-60'
      >
        <CardActionArea
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
          className='h-full'
          onClick={handleCardClick}
        >
          <CardMedia
            className='p-px rounded'
            sx={{ width: '100%', height: '11rem', objectFit: 'fill' }}
            component='img'
            image={image}
            alt={title}
          />
          <CardContent className='w-full'>
            <Typography sx={{ lineHeight: '1', marginBottom: '8px' }} variant='h6' component='div'>
              {title}
            </Typography>
            <Typography sx={{ lineHeight: '1', fontSize: '12px' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Article;
