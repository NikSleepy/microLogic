'use client';
import React, { useEffect, useState } from 'react';
import dummy from '../../mock/wordscrumble.json';
import { FaTrophy } from 'react-icons/fa';
import { Navbar } from '@/component/Navbar';
import { NavbarHp } from '@/component/NavbarHp';

const ScrambleWord = () => {
  const [randomWord, setRandomWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Set a random title from the data
    const randomIndex = Math.floor(Math.random() * dummy.length);
    setRandomWord(dummy[randomIndex].title);
    scrambleWord(dummy[randomIndex].title);
  }, []);

  const scrambleWord = (title: string) => {
    // Scramble the letters of the title
    const scrambled = title
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
    setScrambledWord(scrambled);
  };

  const checkResult = () => {
    // Compare the user input with the original title
    if (userInput.toLowerCase() === randomWord.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
      // Get a new random title for the next round
      const randomIndex = Math.floor(Math.random() * dummy.length);
      setRandomWord(dummy[randomIndex].title);
      scrambleWord(dummy[randomIndex].title);
      setUserInput('');
    } else {
      alert('Wrong answer. Try again!');
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="hidden md:block w-[28%]">
        <Navbar />
      </div>
      <div className='md:hidden flex w-full'>
        <NavbarHp/>
      </div>
      <div className="bg-[#151515] text-white w-full h-full pt-10">
        <div className="w-full h-[10%] flex flex-col text-center justify-between mt-16">
          <p className="font-bold text-2xl sm:text-4xl">Screamble Word</p>
        </div>

        <div className="w-full flex justify-center">
          <div className="bg-[#A91D3A] w-[80%] p-10 border border-slate-50 grid place-items-center rounded-lg  my-5">
            <p className="mb-4 text-justify">Tebak kata yang diacak</p>

            <div className="gap-10 border-1">
              <div className="flex items-center gap-3 justify-center">
                <p>Score: {score}</p>
                <FaTrophy />
              </div>
              <div className="bg-[#C73659] p-7 rounded-lg my-4">
                <b className="text-lg md:text-2xl">Kata Yang di Acak:</b>
                <p className="my-3">{scrambledWord}</p>
 
                <form
                  className="grid gap-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="text-black rounded-md p-2 w-full"
                  />
                  <div className="flex justify-center gap-4">
                    <button
                      className="bg-green-500 my-5 rounded-md w-[40%] p-2"
                      onClick={checkResult}
                    >
                      Cek Hasil
                    </button>
                    <button
                      className="bg-red-500 my-5 rounded-md w-[40%] p-2"
                      onClick={() => setUserInput('')}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrambleWord;
