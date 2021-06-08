import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
var BorderLinearProgress = withStyles(function (theme) {
    return createStyles({
        root: {
            height: 10,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: '#f25e24',
        },
    });
})(LinearProgress);
export default function Progress(props) {
    return (React.createElement("div", { id: "progressComp" },
        React.createElement("div", { id: "messagePopup" },
            React.createElement("p", null, "You're half way there \uD83E\uDD73 Don't give up now!"),
            React.createElement("span", { id: "triangle" })),
        React.createElement(BorderLinearProgress, { variant: "determinate", value: 50 })));
}
