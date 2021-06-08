import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
var useStyles = makeStyles({
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
export default function Next(props) {
    var classes = useStyles();
    var bull = React.createElement("span", { className: classes.bullet }, "\u2022");
    return (React.createElement("div", { id: "nextComp" },
        React.createElement(Card, { className: classes.root },
            React.createElement(CardContent, null,
                React.createElement("p", { className: "sub-title" }, "What's Next?"),
                React.createElement("ol", null,
                    React.createElement("li", null, "Claim Credits"),
                    React.createElement("li", null, "Schedule Appointment"))))));
}
