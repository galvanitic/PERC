import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { brown } from '@material-ui/core/colors';
import { CardHeader } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import PelotonU from '../../../assets/img/PelotonU.png'
import TexasState from '../../../assets/img/txst.jpg'
import { Height } from '@material-ui/icons';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  root: {
    width: "40vw",
    backgroundColor: '#424242',
    height:"100%",
    marginTop:"3vh"
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
  media: {
    // height: '6vh',
    paddingTop: '30%', // 16:9
  }
});
export interface IResourcesProps {
}

export interface IItemProps {
  item:any
}

export function Item (props: IItemProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title={props.item.name}
        />
      </CardActionArea>
      <CardActions className="description">
        <Button className="bttn" size="small" color="primary">
          {props.item.description}
        </Button>
      </CardActions>
      </Card>
)
}


export default function Resources (props: IResourcesProps) {
  var items = [
    {
        name: "PelotonU",
        description: "Complete your degree 50% faster through PelotonU",
        image: PelotonU
    },
    {
        name: "Texas State",
        description: "Complete your degree 30% faster through Texas State",
        image: TexasState
    }
]
  return (
    <div id="resourcesComp">
        <Carousel animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item}/> )
            }
        </Carousel>
    </div>
  );
}
