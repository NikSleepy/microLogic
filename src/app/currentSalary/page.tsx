'use client';
import { Navbar } from '@/component/Navbar';
import { NavbarHp } from '@/component/NavbarHp';
import React, { useState } from 'react';

const CurrentSalary = () => {
  const [form, setForm] = useState({
    gaji: 0,
    tunjangan: 0,
    kebutuhan: 0,
  });
  const [hasil, setHasil] = useState({
    gajikotor: 0,
    gajipokok: 0,
    gajibersih: 0,
  });

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };
  const reset = () => {
    setForm({
      gaji: 0,
      tunjangan: 0,
      kebutuhan: 0,
    });
    setHasil({
      gajikotor: 0,
      gajipokok: 0,
      gajibersih: 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const hitung = (e: React.FormEvent) => {
    e.preventDefault();
    const { gaji, tunjangan, kebutuhan } = form;

    const gajikotor = gaji + tunjangan;
    const gajipokok = gaji;
    const gajibersih = gajikotor - kebutuhan;

    setHasil({
      gajikotor,
      gajipokok,
      gajibersih,
    });
  };
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="hidden md:block w-[28%]">
        <Navbar />
      </div>
      <div className='md:hidden flex w-full'>
        <NavbarHp/>
      </div>
      <div className="bg-[#F8F4E1] text-[#543310] w-full h-full pt-10">
        <div className="w-full h-[10%] grid place-items-center mt-10">
          <p className="font-bold text-2xl sm:text-4xl ">
            Salary Calculating
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="bg-[#74512D] w-[80%] h-auto p-10 border border-slate-50 grid place-items-center rounded-lg text-[#F8F4E1] my-5">
            <p className="mb-4 text-justify">Masukan Data Gaji Anda</p>

            <div className="grid place-items-center">
              <div className="flex flex-col md:flex-row gap-10 " >
                <form className="grid gap-2">
                  <p className="text-2xl">Input Data :</p>
                  <label htmlFor="gaji">Gaji Pokok</label>
                  <input
                    type="number"
                    className="text-black rounded-lg p-2"
                    name="gaji"
                    onChange={handleChange}
                  />
                  <label htmlFor="tunjangan">Tunjangan</label>
                  <input
                    type="number"
                    className="text-black rounded-lg p-2"
                    name="tunjangan"
                    onChange={handleChange}
                  />
                  <label htmlFor="kebutuhan">Kewajiban Pokok</label>
                  <input
                    type="number"
                    className="text-black rounded-lg p-2"
                    name="kebutuhan"
                    onChange={handleChange}
                  />
                </form>
                <div className="grid">
                  <p className="text-2xl">Hasil :</p>
                  <p>Gaji Kotor: {formatRupiah(hasil.gajikotor)}</p>
                  <p>Gaji Pokok: {formatRupiah(hasil.gajipokok)}</p>
                  <p>Gaji Bersih: {formatRupiah(hasil.gajibersih)} </p>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <button
                  className="bg-green-500 my-5 rounded-md w-[45%] md:w-[40%] py-2 hover:bg-green-900 "
                  onClick={hitung}
                >
                  Hitung Gaji
                </button>
                <button
                  className="bg-red-500 my-5 rounded-md w-[45%] md:w-[40%] py-2 hover:bg-red-950 "
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentSalary;
