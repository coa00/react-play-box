import React from 'react';
import RcCalendar from 'react-calendar';
import StarIcon from '@material-ui/icons/Star';

// import locale from './locale';
interface CalnderPropsOnChange {
  (date: Date | Date[]): void;
}

interface CalnderProps{
  onChangeDate: CalnderPropsOnChange;
}

interface getTileContentFunc{
  onChangeDate: CalnderPropsOnChange;
}


export default function Calendar(props:CalnderProps) {
  const  { onChangeDate } = props;

  const RcCalendarProps = {
    onChange: (date: Date | Date[])=>{
      if (date){
        console.log('date:', date);
        onChangeDate(date);
      }
    },
    tileContent: (args:any)=>{
      // 月表示のときのみ
      if (args.view !== 'month') {
        return null;
      }
      const day = args.date.getDate();

      console.log(args, day);

      if (day % 5 === 0){
        return (
            <StarIcon />
          );    
      }
      return null;
    }
  };

  return (
    <RcCalendar {...RcCalendarProps} />
  );
}