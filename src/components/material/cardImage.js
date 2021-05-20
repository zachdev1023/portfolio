import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({img, title, desc, tools}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

        <CardMedia
        className={classes.media}
        image={img}
        title={title}
        />
        
      <CardHeader
        title={title}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {desc}
        </Typography>
        <Typography style={{fontWeight:'bold', paddingTop: '1vh'}} variant="button" color="textSecondary" component="p">
        Tools I used
        </Typography>
        <Typography style={{fontStyle:'oblique', paddingTop: '1vh'}} variant="caption" color="textSecondary" component="p">
        {tools}
        </Typography>
      </CardContent>
    </Card>
  );
}
