"use client"
import MySwiper from "@/component/MySwiper";
import { useRouter } from "next/navigation";



export default function Home() {
  const navigate = useRouter();

  return (
    <div className="w-screen h-screen bg-[#2B4257] text-[#FFFDD7]" >
      <div className='h-1/5 grid place-items-center'>
        <text className="font-bold text-4xl">Welcome to Micro Logic</text>
      </div>

      <MySwiper/>
    </div>
  );
}
