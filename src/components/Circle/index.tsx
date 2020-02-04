import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles({
  root:{},
  progress:{
    position: "relative"
  },
  circle: {
    strokeWidth: '1px',
  },
  contents: {
    fontSize: '24px',
    opacity: '0.2',
    color: '#333333',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    position: "absolute",
    textAlign: 'center'
  },
  valueText:{
    fontSize: '64px'
  }
});

const defaultProps ={
  value: 0,
  color: '#EEEEEE',
  size: 186
};

type Props = {
  children?: React.ReactNode;
} & typeof defaultProps;

export default function Progress(props: Props) {
  const classes = useStyles();
  const {value, color, size } = props;
  return (
    <div className={classes.root}>
      <div style={{color:color, width:size}} className={classes.progress}>
        <CircularProgress classes={{
          circle: classes.circle
        }}
        color="inherit" variant="static" value={value} size={size} />
        <div className={classes.contents}>
           <div>ToDo</div>
          <div><span className={classes.valueText}>{value}</span><span>%</span></div>
        </div>
      </div>
    </div>
  );
}

Progress.defaultProps = defaultProps;