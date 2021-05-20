import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

        <CardMedia
        className={classes.media}
        image="https://media1.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e47xzuhirlce23eah45v8u0czz6ar0q2cttx5dtu64h&rid=giphy.gif&ct=g"
        title="Paella dish"
        />
        
      <CardHeader
        title="Web Development"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I like to code web apps from scratch by using awesome libraries and frameworks.
        </Typography>
        <Typography style={{fontWeight:'bold', paddingTop: '1vh'}} variant="button" color="textSecondary" component="p">
        Tools I used
        </Typography>
        <Typography style={{fontStyle:'oblique', paddingTop: '1vh'}} variant="caption" color="textSecondary" component="p">
        JavaScript, TypeScript, React, (S)CSS, styled-components, Angular, lodash, redux, VS Code, Python
        </Typography>
      </CardContent>
    </Card>
  );
}
