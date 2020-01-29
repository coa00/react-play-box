import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Comp from './index';

export default {
  title: 'Atoms/Calender',
  parameters: {
    info: { inline: true },
  },
};

export function story(){
  return (<Comp onChangeDate={(date)=>{ console.log('st-onChangeDate:', date);action(date.toLocaleString())}} />);
};