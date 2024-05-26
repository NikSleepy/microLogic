'use client';
import ButtonBack from '@/component/ButtonBack';
import { Navbar } from '@/component/Navbar';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [ time, setTime ] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTime(true)
  };

  const handleReset = () => {
    setSelectedDate('');
    setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setTime(false)
  };

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const targetDate = new Date(selectedDate).getTime();
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        // The selected date has passed
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, [selectedDate]);
  return (
    <div className=" h-screen flex">
      <Navbar/>
      {/* <ButtonBack /> */}
      <div className='bg-[#401F71] text-[#FDAF7B] w-full'>
      <div className="w-full h-[10%] flex flex-col text-center justify-between mt-20">
        <text className="font-bold text-2xl sm:text-4xl">Count Duration</text>
      </div>

      <div className="w-full  flex justify-center text-white">
        <div className="bg-[#824D74] w-[80%] p-10 border border-slate-50 grid place-items-center rounded-lg">
          <text className="mb-4 text-justify">
            Pilih Tanggal untuk Memulai Hitungan Mundur
          </text>
          <input
            type="date"
            onChange={handleDateChange}
            value={selectedDate}
            className="w-[30%] text-black rounded-md p-2"
          />

          {time && 
          <div className='flex flex-col text-center mt-4'>
            <text className='font-bold text-3xl'>Waktu Mundur</text>
            <text className='text-2xl my-2'>
              {' '}
              {timeRemaining.days} hari, {timeRemaining.hours} jam,{' '}
              {timeRemaining.minutes} menit, {timeRemaining.seconds} detik
            </text>
          </div>
          }

          <div className="flex md:flex-row  flex-col   justify-center items-center my-4 gap-2">
            <button
              className="bg-green-600 w-20 h-10 rounded-lg"
              onClick={handleSubmit}
            >
              start
            </button>
            <button
              className="bg-red-600 w-20 h-10 rounded-lg"
              onClick={handleReset}
            >
              reset
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
