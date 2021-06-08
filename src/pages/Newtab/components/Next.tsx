import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { brown } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: "40vw",
    backgroundColor: '#424242'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface INextProps {
}

export default function Next (props: INextProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div id="nextComp">
      <Card className={classes.root}>
      <CardContent>
      <p className="sub-title">What's Next?</p>
        <ol>
          <li>Claim Credits</li>
          <li>Schedule Appointment</li>
        </ol>
      </CardContent>
    </Card>
    </div>
  );
}
