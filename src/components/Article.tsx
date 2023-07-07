import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

interface Props {
  src: string
  alt: string
  title: string
  description: string
}

function Article({ src, alt, title, description }: Props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ backgroundColor: '#FAFAFA', boxShadow: '2px 3px 4px #e1b15d80' }}
        className='text-center h-full w-4/5  mx-auto'
      >
        <CardActionArea
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
          className='h-full'
        >
          <CardMedia
            className='p-px rounded'
            sx={{ width: '100%', height: '11rem', objectFit: 'fill' }}
            component='img'
            image={src}
            alt={alt}
          />
          <CardContent className='w-full'>
            <Typography variant='h6' component='div'>
              {title}
            </Typography>
            <Typography variant='caption'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Article;
