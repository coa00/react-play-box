import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Comp from './index';

export default {
  title: 'Atoms/Calender',
  parameters: {
    info: { inline: true },
  },
};

const markingDates=[{
  date: new Date('2020-01-03'),
  className:'starday',
  tileContentString: 'aaaa'
},
{  date: new Date('2020-01-19'),
  className:'starday',
},
{  date: new Date('2020-01-08'),
  tileContentString:'starday',
}];

export function story(){
  return (<Comp markingDates={markingDates} onChangeDate={(date)=>{ console.log('st-onChangeDate:', date);action(date.toLocaleString())}} />);
};