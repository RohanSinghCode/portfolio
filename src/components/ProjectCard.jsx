import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCard = ({image, title, description, liveUrl, repoUrl}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='dark:bg-appbar-darkMode'>
    {
      image &&
      <CardMedia
        sx={{ height: 140 }}
        image={image}
      />
    }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='text-text-darkMode'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={liveUrl}>Live</Button>
        <Button size="small" href={repoUrl}>Code</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
