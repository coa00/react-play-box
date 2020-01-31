import React from 'react';
import RcCalendar from 'react-calendar';
// import StarIcon from '@material-ui/icons/Star';
import './Calender.css';

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

const rokuyyobi = ['大安', '赤口', '先勝', '友引', '先負', '仏滅'];


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
      const month = args.date.getMonth();

      console.log(args, day);

      const index = (day + month) % 6;

      return (
          <p>{rokuyyobi[index]}</p>
        );    
    },
    tileClassName: (args:any)=>{
      // 月表示のときのみ
      if (args.view !== 'month') {
        return null;
      }
      const day = args.date.getDate();
      // const month = args.date.getMonth();

      if (day % 4 === 0){
        return "starday";
      }
    }
  };

  return (
    <RcCalendar {...RcCalendarProps} />
  );
}