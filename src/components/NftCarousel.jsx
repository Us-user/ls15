import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import nft1 from '../assets/m1.svg'
import nft2 from '../assets/m2.svg'
import nft3 from '../assets/m3.svg'
import nft4 from '../assets/m4.svg'
import nft5 from '../assets/m5.svg'
import nft6 from '../assets/m6.svg'
import nft7 from '../assets/m7.svg'

const nftSlides = [
    { id: 1, img: nft1 },
    { id: 2, img: nft2 },
    { id: 3, img: nft3 },
    { id: 4, img: nft4 },
    { id: 5, img: nft5 },
    { id: 6, img: nft6 },
    { id: 7, img: nft7 },
];

export default function NftCarousel() {
    return (
        <Box sx={{ width: '100%', py: 5, overflow: 'hidden' }}>
            <Swiper
                modules={[EffectCoverflow, Autoplay, Mousewheel]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                mousewheel={{
                    forceToAxis: true,      // Скролл реагирует, только когда крутишь горизонтально/вертикально по оси
                    sensitivity: 3,         // ЧУВСТВИТЕЛЬНОСТЬ: чем выше число, тем быстрее улетают слайды (дефолт — 1)
                    thresholdDelta: 10,     // Минимальное усилие для срабатывания (меньше число — мгновенный старт)
                }}
                shortSwipes={true}         // Позволяет перелистывать слайд быстрым коротким движением
                longSwipes={true}
                followFinger={true}
                coverflowEffect={{
                    rotate: 0,       // Угол поворота боковых слайдов (0 — они плоские, как на фото)
                    stretch: 80,     // Наложение слайдов друг на друга (чем больше, тем сильнее нахлест)
                    depth: 200,      // На сколько боковые слайды уходят вглубь экрана по оси Z
                    modifier: 1,     // Множитель эффекта
                    slideShadows: false, // Отключаем дефолтные черные тени Swiper
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                style={{ width: '100%', padding: '40px 0' }}
            >
                {nftSlides.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        style={{ width: '280px', height: '400px' }} // Размеры одной карточки
                    >
                        <Box
                            component="img"
                            src={slide.img}
                            alt="NFT"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '16px',
                                border: '2px solid #FF00FF', // Фиолетовая неоновая рамка как на макете
                                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.7)', // Мощная тень под карточкой
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}