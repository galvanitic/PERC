var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import appointments from './demo-data/today-appointments';
var style = function (theme) { return ({
    todayCell: {
        backgroundColor: fade(theme.palette.primary.main, 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.14),
        },
        '&:focus': {
            backgroundColor: fade(theme.palette.primary.main, 0.16),
        },
    },
    weekendCell: {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        '&:hover': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        },
        '&:focus': {
            backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
        },
    },
    today: {
        backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
    weekend: {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
    },
}); };
var useStyles = makeStyles(function (theme) {
    return createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: "90vw",
                height: "35vh",
            },
        },
    });
});
var TimeTableCellBase = function (_a) {
    var classes = _a.classes, restProps = __rest(_a, ["classes"]);
    var startDate = restProps.startDate;
    var date = new Date(startDate);
    if (date.getDate() === new Date().getDate()) {
        return React.createElement(WeekView.TimeTableCell, __assign({}, restProps, { className: classes.todayCell }));
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        return React.createElement(WeekView.TimeTableCell, __assign({}, restProps, { className: classes.weekendCell }));
    }
    return React.createElement(WeekView.TimeTableCell, __assign({}, restProps));
};
var TimeTableCell = withStyles(style, { name: 'TimeTableCell' })(TimeTableCellBase);
var DayScaleCellBase = function (_a) {
    var classes = _a.classes, restProps = __rest(_a, ["classes"]);
    var startDate = restProps.startDate, today = restProps.today;
    if (today) {
        return React.createElement(WeekView.DayScaleCell, __assign({}, restProps, { className: classes.today }));
    }
    if (startDate.getDay() === 0 || startDate.getDay() === 6) {
        return React.createElement(WeekView.DayScaleCell, __assign({}, restProps, { className: classes.weekend }));
    }
    return React.createElement(WeekView.DayScaleCell, __assign({}, restProps));
};
var DayScaleCell = withStyles(style, { name: 'DayScaleCell' })(DayScaleCellBase);
export default function Schedule(props) {
    var classes = useStyles();
    var _a = React.useState(appointments), data = _a[0], chData = _a[1];
    return (React.createElement("div", { id: "scheduleComp" },
        React.createElement("p", { className: "sub-title" }, "Current Schedule"),
        React.createElement("div", { className: classes.root },
            React.createElement(Paper, { elevation: 3 },
                React.createElement(Scheduler, { data: data },
                    React.createElement(ViewState, null),
                    React.createElement(WeekView, { startDayHour: 9, endDayHour: 19, timeTableCellComponent: TimeTableCell, dayScaleCellComponent: DayScaleCell }),
                    React.createElement(Appointments, null))))));
}
