"use client"
import MySwiper from "@/component/MySwiper";



export default function Home() {

  return (
    <div className="w-screen h-screen bg-[#2B4257] text-[#FFFDD7]" >
      <div className='h-1/5 grid place-items-center pt-10'>
        <p className="font-bold text-2xl md:text-4xl">Welcome to Micro Logic</p>
        <p className="font-semibold text-xl md:text-2xl">Please Choose Your Game</p>
      </div>

      <MySwiper/>
    </div>
  );
}
