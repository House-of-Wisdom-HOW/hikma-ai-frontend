import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

interface Props {
  src: string
  alt: string
  title: string
  description: string
}

function Article({ src, alt, title, description }: Props) {
  return (
    <Card color='primary'>
      <CardActionArea>
        <CardMedia
          component='img'
          image={src}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Article;
