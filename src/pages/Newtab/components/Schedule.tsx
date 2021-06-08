import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import appointments from './demo-data/today-appointments';
export interface IScheduleProps {
}
const style = (theme: Theme) => ({
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
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: "90vw",
        height: "35vh",
      },
    },
  }),
);

const TimeTableCellBase = ({ classes, ...restProps }:any) => {
  const { startDate } = restProps;
  const date = new Date(startDate);
  if (date.getDate() === new Date().getDate()) {
    return <WeekView.TimeTableCell {...restProps} className={classes.todayCell} />;
  } if (date.getDay() === 0 || date.getDay() === 6) {
    return <WeekView.TimeTableCell {...restProps} className={classes.weekendCell} />;
  } return <WeekView.TimeTableCell {...restProps} />;
};

const TimeTableCell:any = withStyles(style, { name: 'TimeTableCell' })(TimeTableCellBase);

const DayScaleCellBase = ({ classes, ...restProps }:any) => {
  const { startDate, today } = restProps;
  if (today) {
    return <WeekView.DayScaleCell {...restProps} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...restProps} className={classes.weekend} />;
  } return <WeekView.DayScaleCell {...restProps} />;
};

const DayScaleCell:any = withStyles(style, { name: 'DayScaleCell' })(DayScaleCellBase);

export default function Schedule (props: IScheduleProps) {
  const classes = useStyles();
  const [data, chData] = React.useState(appointments)
  return (
    <div id="scheduleComp">
      <p className="sub-title">Current Schedule</p>
      <div className={classes.root}>
        <Paper elevation={3}>
        <Scheduler
          data={data}
          // height={'40vh'}
        >
          <ViewState />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />
          <Appointments />
        </Scheduler>
        </Paper>
      </div>

    </div>
  );
}
