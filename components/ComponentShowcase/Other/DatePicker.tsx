"use client"
import { DatePickerDialog } from '@/components/CustomComponent/Other/DatePicker'

const DatePickerShowCase = () => {
  return (
    <>
        <DatePickerDialog
          onDateSelect={(date) => console.log(date)}
          theme="dark"
          initialDate={new Date()}
        />
     </>
  )
}
export default DatePickerShowCase


