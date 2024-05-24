'use client';
import ButtonBack from '@/component/ButtonBack';
import React, { useState } from 'react';

const page = () => {
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
    <div className="h-screen bg-[#F8F4E1] text-[#543310]">
      <ButtonBack />
      <div className="w-full h-[10%] grid place-items-center ">
        <text className="font-bold text-2xl sm:text-4xl ">
          Salary Calculating
        </text>
      </div>

      <div className="w-full flex justify-center">
        <div className="bg-[#74512D] w-[80%] p-10 border border-slate-50 grid place-items-center rounded-lg text-[#F8F4E1] my-5">
          <text className="mb-4 text-justify">Masukan Data Gaji Anda</text>

          <div className="grid place-items-center">
            <div className="flex gap-10">
              <form className="grid gap-2">
              <text className="text-2xl">Input Data :</text>
                <label htmlFor="gaji">Gaji Pokok</label>
                <input
                  type="number"
                  className="text-black rounded-sm"
                  name="gaji"
                  onChange={handleChange}
                />
                <label htmlFor="tunjangan">Tunjangan</label>
                <input
                  type="number"
                  className="text-black rounded-sm"
                  name="tunjangan"
                  onChange={handleChange}
                />
                <label htmlFor="kebutuhan">Kewajiban Pokok</label>
                <input
                  type="number"
                  className="text-black rounded-sm"
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
            <button
              className="bg-[#AF8F6F] my-5 rounded-md w-[40%] py-2 hover:bg-[#543310] "
              onClick={hitung}
            >
              Hitung Gaji
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
