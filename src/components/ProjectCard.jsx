import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCard = ({image, title, description, liveUrl, repoUrl}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live</Button>
        <Button size="small">Code</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
