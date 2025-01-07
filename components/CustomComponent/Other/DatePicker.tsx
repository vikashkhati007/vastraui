'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// First, let's include the DatePicker component we created earlier
const ChevronLeft = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface DatePickerProps {
  onDateSelect: (date: Date) => void;
  className?: string;
  theme?: 'light' | 'dark';
}

function DatePicker({
  onDateSelect,
  className = '',
  theme = 'light',
}: DatePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const yearDropdownRef = React.useRef<HTMLDivElement>(null);

  const isDark = theme === 'dark';

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  const getPreviousMonthDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const previousMonth = month === 0 ? 11 : month - 1;
    const previousYear = month === 0 ? year - 1 : year;
    const daysInPreviousMonth = new Date(
      previousYear,
      previousMonth + 1,
      0
    ).getDate();
    const days = [];

    const daysNeeded = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = daysNeeded - 1; i >= 0; i--) {
      days.push(new Date(previousYear, previousMonth, daysInPreviousMonth - i));
    }

    return days;
  };

  const getNextMonthDays = (
    year: number,
    month: number,
    currentMonthDays: Date[]
  ) => {
    const totalDaysNeeded = 42;
    const daysNeeded = totalDaysNeeded - currentMonthDays.length;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const days = [];

    for (let i = 1; i <= daysNeeded; i++) {
      days.push(new Date(nextYear, nextMonth, i));
    }

    return days;
  };

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const currentMonthDays = getDaysInMonth(year, month);
  const previousMonthDays = getPreviousMonthDays(year, month);
  const nextMonthDays = getNextMonthDays(year, month, [
    ...previousMonthDays,
    ...currentMonthDays,
  ]);

  const allDays = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleQuickSelect = (days: number) => {
    const date = new Date();

    date.setDate(date.getDate() + days);
    setSelectedDate(date);
    setCurrentDate(date);
    onDateSelect(date);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target as Node)
      ) {
        setIsYearDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-[350px] ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-xl shadow-lg p-4 font-sans ${className}`}
    >
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            className={`px-3 py-1.5 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-full text-sm font-semibold transition-colors`}
            onClick={() => handleQuickSelect(0)}
          >
            Today
          </button>
          <button
            className={`px-3 py-1.5 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-full text-sm font-semibold transition-colors`}
            onClick={() => handleQuickSelect(1)}
          >
            Tomorrow
          </button>
          <button
            className={`px-3 py-1.5 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-full text-sm font-semibold transition-colors`}
            onClick={() => handleQuickSelect(2)}
          >
            In 2 days
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            className={`w-10 h-10 flex items-center justify-center rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm transition-colors`}
            onClick={handlePrevMonth}
          >
            <ChevronLeft />
          </button>
          <div className="relative">
            <button
              className="text-base font-semibold focus:outline-none"
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
            >
              {MONTHS[month]} {year}
            </button>
            {isYearDropdownOpen && (
              <div
                ref={yearDropdownRef}
                className={`absolute z-10 mt-1 w-32 ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border rounded-md shadow-lg max-h-60 overflow-auto`}
              >
                {Array.from(
                  { length: new Date().getFullYear() - 1949 },
                  (_, i) => 1950 + i
                )
                  .reverse()
                  .map((y) => (
                    <button
                      key={y}
                      className={`block w-full text-left px-4 py-2 ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                      onClick={() => {
                        setCurrentDate(new Date(y, month, 1));
                        setIsYearDropdownOpen(false);
                      }}
                    >
                      {y}
                    </button>
                  ))}
              </div>
            )}
          </div>
          <button
            className={`w-10 h-10 flex items-center justify-center rounded-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm transition-colors`}
            onClick={handleNextMonth}
          >
            <ChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-0">
          {DAYS.map((day) => (
            <div
              key={day}
              className={`h-10 flex items-center justify-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} font-medium`}
            >
              {day}
            </div>
          ))}
          {allDays.map((date, index) => {
            const isCurrentMonth = date.getMonth() === month;
            const isSelected =
              date.toDateString() === selectedDate.toDateString();
            const isToday = date.toDateString() === new Date().toDateString();

            return (
              <motion.button
                key={index}
                className={`h-10 w-10 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors
                  ${!isCurrentMonth ? (isDark ? 'text-gray-600' : 'text-gray-300') : ''}
                  ${isSelected ? 'bg-blue-500 text-white' : ''}
                  ${isToday && !isSelected ? (isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-600') : ''}
                  ${isCurrentMonth && !isSelected && !isToday ? (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100') : ''}
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDateSelect(date)}
              >
                {date.getDate()}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Now, let's create the DatePickerDialog component
interface DatePickerDialogProps {
  onDateSelect: (date: Date) => void;
  theme?: 'light' | 'dark';
  initialDate?: Date;
}

export function DatePickerDialog({
  onDateSelect,
  theme = 'light',
  initialDate,
}: DatePickerDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate || null
  );

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
    setIsOpen(false);
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="relative">
      <button
        className={`w-full px-4 py-2 text-left ${
          theme === 'dark'
            ? 'bg-gray-800 text-white border-gray-700'
            : 'bg-white text-gray-800 border-gray-300'
        } border rounded-md shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
        onClick={handleOpenDialog}
      >
        <div className="flex items-center justify-between ">
          <span
            className={selectedDate ? 'text-current px-2' : 'text-gray-400'}
          >
            {selectedDate ? formatDate(selectedDate) : 'Select a date'}
          </span>
          <svg
            className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            aria-labelledby="modal-title"
            aria-modal="true"
            className="fixed inset-0 z-50 overflow-y-auto"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            role="dialog"
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <motion.div
                aria-hidden="true"
                className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity backdrop-blur-sm"
                exit={{ opacity: 0 }}
                onClick={handleCloseDialog}
              />
              <span
                aria-hidden="true"
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
              >
                &#8203;
              </span>
              <motion.div
                className={`inline-block align-bottom ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle`}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <div className="relative shadow-md">
                  <button
                    aria-label="Close dialog"
                    className={`absolute top-2 right-2 p-1 rounded-full ${
                      theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-black/85 hover:bg-black/40'
                    } transition-colors`}
                    onClick={handleCloseDialog}
                  >
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>
                  </button>
                  <DatePicker theme={theme} onDateSelect={handleDateSelect} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
