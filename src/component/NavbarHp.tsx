'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiFillCalculator } from 'react-icons/ai';
import { BsCurrencyExchange } from 'react-icons/bs';
import { FaFileWord } from 'react-icons/fa';
import { IoMdTimer } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

export const NavbarHp = () => {
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E0342',
        height: '80px',
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          width: '30%',
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '10px',
          cursor: 'pointer',
        }}
        onClick={() => navigate.push('/')}
      >
        <Image
          src="/img/micrologic_logo.png"
          alt="logo"
          width={180}
          height={180}
          priority
        />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div style={{ position: 'relative', width: '50%', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center', paddingRight: '20px' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: '#FEF7C3',
            fontSize: '30px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <GiHamburgerMenu />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              width: '100%',
              backgroundColor: '#1E0342',
              textAlign: 'center',
              color: '#FEF7C3',
              padding: '10px 10px',
              borderRadius: '5px',
              zIndex: 50,
            }}
          >
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '10px',
                cursor: 'pointer',
                padding: '10px 0',
              }}
              onClick={() => navigate.push('/countdown')}
            >
              <IoMdTimer size={30} />
              Count Down
            </li>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '10px',
                cursor: 'pointer',
                padding: '10px 0',
              }}
              onClick={() => navigate.push('/currencyConvert')}
            >
              <BsCurrencyExchange size={30} />
              Currency Calculating
            </li>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '10px',
                cursor: 'pointer',
                padding: '10px 0',
              }}
              onClick={() => navigate.push('/currentSalary')}
            >
              <AiFillCalculator size={30} />
              Salary Calculator
            </li>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                gap: '10px',
                cursor: 'pointer',
                padding: '10px 0',
              }}
              onClick={() => navigate.push('/scrambleWord')}
            >
              <FaFileWord size={30} />
              Scramble Word
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
