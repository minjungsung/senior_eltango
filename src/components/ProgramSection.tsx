'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

const programs = [
  { title: '💪 시니어 맨손체조', category: '운동', desc: '맨손체조를 같이 즐겨봐요~!', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop&q=75' },
  { title: '🧠 인지재활훈련', category: '교육', desc: '마음의 근육과 생각의 힘을 키워요.', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop&q=75' },
  { title: '💃 시니어 탱고 댄스', category: '교육', desc: '맞춤형 건강 댄스입니다.', img: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?w=500&h=500&fit=crop&q=75' },
];

export default function ProgramSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white w-full max-w-[1300px]">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-snug">
          <span className="whitespace-pre-line md:whitespace-normal"><span className="text-tango">eltango</span>{"는 다양한\n프로그램을 준비하고 있습니다"}</span>
        </h2>
        <div className="flex items-center gap-2 shrink-0">
          <button className="program-prev hidden lg:flex w-10 h-10 border rounded-lg items-center justify-center">‹</button>
          <button className="program-next hidden lg:flex w-10 h-10 border rounded-lg items-center justify-center">›</button>
          <Link href="/program/list" className="text-xs sm:text-sm border rounded-lg px-3 py-2 hover:bg-tango hover:text-white transition">자세히 보기</Link>
        </div>
      </div>
      <Swiper modules={[Navigation]} navigation={{ prevEl: '.program-prev', nextEl: '.program-next' }} spaceBetween={12} slidesPerView={1.2} breakpoints={{ 480: { slidesPerView: 1.5 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3, spaceBetween: 16 } }}>
        {programs.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="group relative aspect-[4/5] sm:aspect-square rounded-xl overflow-hidden">
              <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:translate-y-full sm:group-hover:translate-y-0 sm:transition-transform sm:duration-300">
                <span className="inline-block px-2 py-0.5 text-[10px] sm:text-xs text-white bg-tango/80 rounded-full mb-1">{p.category}</span>
                <h3 className="text-sm font-bold text-white">{p.title}</h3>
                <p className="text-xs text-white/80 mt-1">{p.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
