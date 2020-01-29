import React from 'react';
import RcCalendar from 'rc-calendar';
import locale from './locale';

export default function Calendar() {
  const RcCalendarProps = {
    locale
  };
  return (
    <RcCalendar {...RcCalendarProps} />
  );
}