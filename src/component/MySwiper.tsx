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
        slideShadows: true,
      }}
      modules={[Navigation, Pagination, EffectCoverflow]}
      navigation={true}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      className="mySwiper"
      style={{ padding: '40px', width: '80%', height: '70%' }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={`${item.img}`}
            alt={`${item.endpoint}`}
            style={{
              width: '100%',
              height: '100%',
              transition: 'filter 0.3s ease',
              cursor: 'pointer',
              boxShadow: hover == item.id ? '0 0 25px yellow' : '0 0 0px 0',
              position: 'relative',
            }}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate.push(`/${item.endpoint}`)}
          />
        </SwiperSlide>
      ))}

      {/* <ButtomSwiper /> */}
    </Swiper>
  );
};

export default MySwiper;
