'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

const albumImages = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=500&fit=crop&q=75',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&h=500&fit=crop&q=75',
  'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=500&h=500&fit=crop&q=75',
];

export default function AlbumSection() {
  return (
    <section className="py-12 sm:py-16 px-4 w-full max-w-[1300px]">
      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8">
        <div className="lg:w-1/3 text-center lg:text-right">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-snug">
            <span className="whitespace-pre-line md:whitespace-normal"><span className="text-tango">eltango</span>{"는\n행복한 하루를 만들어 드립니다."}</span>
          </h2>
          <div className="mt-3 flex items-center justify-center lg:justify-end gap-2">
            <Link href="/notice/album" className="text-xs sm:text-sm border rounded-lg px-3 py-2 hover:bg-tango hover:text-white transition">자세히 보기</Link>
            <button className="album-prev hidden lg:flex w-10 h-10 border rounded-lg items-center justify-center">‹</button>
            <button className="album-next hidden lg:flex w-10 h-10 border rounded-lg items-center justify-center">›</button>
          </div>
        </div>
        <div className="lg:w-2/3">
          <Swiper modules={[Navigation]} navigation={{ prevEl: '.album-prev', nextEl: '.album-next' }} spaceBetween={12} slidesPerView={1.3} breakpoints={{ 480: { slidesPerView: 1.8 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 16 } }}>
            {albumImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
