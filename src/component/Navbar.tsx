'use ctextent';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiFillCalculator } from 'react-icons/ai';
import { BsCurrencyExchange } from 'react-icons/bs';
import { FaFileWord } from 'react-icons/fa';
import { IoMdTimer } from 'react-icons/io';

export const Navbar = () => {
  const navigate = useRouter();

  return (
    <div
      className="h-screen  justify-center md:grid "
      style={{ backgroundColor: '#1E0342', width: '23%' }}
    >
      <div
        className="w-full flex justify-center pb-2"
        style={{ height: '20%', cursor: 'pointer' }}
        onClick={() => navigate.push('/')}
      >
        <img
          src="/img/micrologic_logo.png"
          alt="logo"
          style={{ width: '60%', height: '100%' }}
        />
      </div>

      <div
        className="grid justify-center grayscale"
        style={{ color: '#FEF7C3', height: '80%' }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '15px',
            gap: '15px',
          }}
        >
          <text
            className="flex items-center gap-2 "
            style={{ cursor: 'pointer' }}
            onClick={() => navigate.push('/countdown')}

          >
            <IoMdTimer size={30} />
            Count Down
          </text>
          <text
            className="flex items-center gap-2 "
            style={{ cursor: 'pointer' }}
            onClick={() => navigate.push('/currencyConvert')}
          >
            <BsCurrencyExchange size={30} /> Currency Calculating
          </text>
          <text
            className="flex items-center gap-2 "
            style={{ cursor: 'pointer' }}
            onClick={() => navigate.push('/currentSalary')}
          >
            <AiFillCalculator size={30} /> Salary Calculator
          </text>
          <text
            className="flex items-center gap-2 "
            style={{ cursor: 'pointer' }}
            onClick={() => navigate.push('/scrambleWord')}
          >
            <FaFileWord size={30} /> Scramble word
          </text>
        </ul>
      </div>
    </div>
  );
};
