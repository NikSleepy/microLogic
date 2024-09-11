'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import data from '../mock/game.json';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const MySwiper: React.FC = () => {
  const [hover, setHover] = React.useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };
  const navigate = useRouter();
  return (
    <Swiper
      effect="coverflow"
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[Navigation, Pagination, EffectCoverflow]}
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
      style={{ padding: '40px', width: '90%', height: '70%' }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              cursor: 'pointer',
              transition: 'filter 0.3s ease',
            }}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate.push(`/${item.endpoint}`)}
          >
            <div className="relative w-full " style={{ position: 'relative' , height: 'auto', boxShadow: hover == item.id ? '0 0 25px yellow' : '0 0 0px 0' }}>
              <Image
                src={`${item.img}`}
                alt={item.endpoint}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
                sizes='(100vw, 100vh)'
                priority
              />
            </div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default MySwiper;
