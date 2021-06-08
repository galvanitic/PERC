import * as React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
export interface IProgressProps {
}
const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
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
  }),
)(LinearProgress);

export default function Progress (props: IProgressProps) {
  return (
    <div id="progressComp">
      <div id="messagePopup">
        <p>You're half way there 🥳 Don't give up now!</p>
        <span id="triangle"></span>
      </div>
      <BorderLinearProgress variant="determinate" value={50} />
    </div>
  );
}
