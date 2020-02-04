import React from 'react';
import RcCalendar from 'react-calendar';
// import StarIcon from '@material-ui/icons/Star';
import './Calender.css';

// import locale from './locale';
interface CalnderPropsOnChange {
  (date: Date | Date[]): void;
}


interface markingDate{
  date: Date;
  className?: string;
  tileContentString?: string
}

interface CalnderProps{
  onChangeDate: CalnderPropsOnChange;
  markingDates: markingDate[];
}

interface getTileContentFunc{
  onChangeDate: CalnderPropsOnChange;
}

function dateCompare(day1:Date, day2:Date) {
  console.log("dateCompare", day1.getFullYear() === day2.getFullYear() && day1.getMonth() === day2.getMonth() && day1.getDate() === day2.getDate());
  return (day1.getFullYear() === day2.getFullYear() && day1.getMonth() === day2.getMonth() && day1.getDate() === day2.getDate());
}

export default function Calendar(props:CalnderProps) {
  const  { onChangeDate, markingDates } = props;

  const RcCalendarProps = {
    onChange: (date: Date | Date[])=>{
      if (date){
        console.log('date:', date);
        onChangeDate(date);
      }
    },
    tileContent: (args:any):any=>{
      // 月表示のときのみ
      if (args.view !== 'month') {
        return null;
      }
      const date = args.date;

      let index = 0;

      while(index < markingDates.length){
        const markingDate = markingDates[index];
        if (markingDate.tileContentString && dateCompare(date, markingDate.date)){
          return (
            <p>{markingDates[index].tileContentString}</p>
          );    
        }
        index++;
      }
      return null;
    },
    tileClassName: (args:any):any=>{
      // 月表示のときのみ
      if (args.view !== 'month') {
        return null;
      }
      const date = args.date;

      let index = 0;
      while(index < markingDates.length){
        const markingDate = markingDates[index];
        if (markingDate.className && dateCompare(date, markingDate.date)){
          return markingDate.className;    
        }
        index++;
      }
    }
  };

  return (
    <RcCalendar {...RcCalendarProps} />
  );
}


Calendar.defaultProps = {
  markingDates: [],
  onChangeDate: ()=>{}
}