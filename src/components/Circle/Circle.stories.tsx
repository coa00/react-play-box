import * as React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Comp from './index';

export default {
  title: 'Atoms/Circle',
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs]
};

export function story(){
  const color = text("color", "#F9B8B6");
  const value = number("value", 100);

  return (<Comp color={color} value={value} />);   
};