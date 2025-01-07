'use client';
import { DatePickerDialog } from '@/components/CustomComponent/Other/DatePicker';

const DatePickerShowCase = () => {
  return (
    <>
      <DatePickerDialog
        initialDate={new Date()}
        theme="dark"
        onDateSelect={(date) => console.log(date)}
      />
    </>
  );
};

export default DatePickerShowCase;
