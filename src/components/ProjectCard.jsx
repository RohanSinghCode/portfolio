import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProjectCard = ({image, title, description, duration, position}) => {
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
        <Typography gutterBottom variant="h5" component="div" className='dark:text-text-darkMode mb-0 pb-0'>
          {position} ({title})
        </Typography>
        <Typography gutterBottom variant="subtitle-1" component="div" className='dark:text-text-darkMode'>
          {duration}
        </Typography>
        <Typography variant="body2" className="dark:text-text-darkMode">
        <div dangerouslySetInnerHTML={
                { __html: description }
             } />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
