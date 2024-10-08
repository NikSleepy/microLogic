'use client';
import { Navbar } from '@/component/Navbar';
import { NavbarHp } from '@/component/NavbarHp';
import React, { useEffect, useState } from 'react';

const CurrencyConvert = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('IDR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  useEffect(() => {
    // Fetch exchange rate data from API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const data = await response.json();
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rate data:', error);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    // Convert the amount when exchange rate or amount changes
    if (exchangeRate !== null) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [exchangeRate, amount]);

  return (
    <div className="flex h-auto md:h-screen flex-col md:flex-row">
      <div className="hidden md:block w-[28%]">
        <Navbar />
      </div>
      <div className='md:hidden flex w-full'>
        <NavbarHp/>
      </div>
      <div className="bg-[#1C1678] text-[#A3FFD6] w-full h-full pt-10">
        <div className="w-full h-[10%] grid place-items-center mt-20 ">
          <p className="font-bold text-2xl sm:text-4xl ">
            Converter Currency
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="bg-[#8576FF] w-[80%] p-10 border border-slate-50 grid place-items-center rounded-lg text-black my-5">
            <p className="mb-4 text-justify">
              Konversi mata uang IDR, USD, EUR, GBP
            </p>

            <div className="gap-10 border-1 w-full grid justify-items-center">
              <form className="flex flex-col md:flex-row w-full justify-center gap-3">
                <div>
                  <label htmlFor="amount">Jumlah: </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    className="text-black p-2 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="fromCurrency">Dari Mata Uang: </label>
                  <select
                    id="fromCurrency"
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                    className="text-black p-2 rounded-lg "
                  >
                    <option value="IDR">IDR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="toCurrency">Ke Mata Uang: </label>
                  <select
                    id="toCurrency"
                    value={toCurrency}
                    onChange={handleToCurrencyChange}
                    className="text-black p-2 rounded-lg"
                  >
                    <option value="IDR">IDR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </form>

              <div className="my-3">
                <p>Hasil Konversi:</p>
                {convertedAmount !== null ? (
                  <p>
                    {amount} {fromCurrency} = {convertedAmount.toFixed(2)}{' '}
                    {toCurrency}
                  </p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvert;
