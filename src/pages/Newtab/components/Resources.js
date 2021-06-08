import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Carousel from 'react-material-ui-carousel';
import PelotonU from '../../../assets/img/PelotonU.png';
import TexasState from '../../../assets/img/txst.jpg';
import CardActionArea from '@material-ui/core/CardActionArea';
var useStyles = makeStyles({
    root: {
        width: "40vw",
        backgroundColor: '#424242',
        height: "100%",
        marginTop: "3vh"
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
        paddingTop: '30%',
    }
});
export function Item(props) {
    var classes = useStyles();
    var bull = React.createElement("span", { className: classes.bullet }, "\u2022");
    return (React.createElement(Card, { className: classes.root },
        React.createElement(CardActionArea, null,
            React.createElement(CardMedia, { className: classes.media, image: props.item.image, title: props.item.name })),
        React.createElement(CardActions, { className: "description" },
            React.createElement(Button, { className: "bttn", size: "small", color: "primary" }, props.item.description))));
}
export default function Resources(props) {
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
    ];
    return (React.createElement("div", { id: "resourcesComp" },
        React.createElement(Carousel, { animation: "slide" }, items.map(function (item, i) { return React.createElement(Item, { key: i, item: item }); }))));
}
