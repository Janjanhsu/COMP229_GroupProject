import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Welcome from '../src/assets/images/Welcome.png';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  image: {
    width: 864,
    height: 432
  },
  button:{
    padding: theme.spacing(1,1,1),
    color: theme.palette.protectedTitle
  }
}));

export default function Home() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Typography variant="h6" className={classes.title}>Home Page</Typography>
      <CardMedia className={classes.media}
        image={Welcome} title="Flash Quiz" />
      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to the TECHARTGIE home page.
        </Typography>
      </CardContent>
    </Card>
  )
}
