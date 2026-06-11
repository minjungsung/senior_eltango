'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=75',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=75',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=75',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=75',
];

const quickLinks = [
  { title: '센터소개', desc: '브랜드, 시설, 오시는길', href: '/intro/brand', cls: 'bg-tango text-white' },
  { title: '프로그램', desc: '일정, 클리닉, 프로그램', href: '/program/schedule', cls: 'bg-white/95 text-beluga hover:bg-tango hover:text-white' },
  { title: '견학신청', desc: '견학신청 상담', href: '/consult/visit', cls: 'bg-white/95 text-beluga hover:bg-tango hover:text-white' },
];

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full">
      <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 5000 }} pagination={{ clickable: true }} loop className="h-full w-full">
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[100svh] w-full">
              <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
              <div className="absolute inset-0 bg-black/40" />
              {i === 3 && (
                <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-40 sm:pb-36 lg:justify-center lg:items-center lg:pb-0">
                  <div className="rounded-xl backdrop-blur-md bg-beluga/30 px-6 py-5 sm:px-10 sm:py-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tango">ELTANGO</h1>
                    <p className="mt-2 text-base sm:text-lg text-white leading-relaxed">
                      <span className="block">2026년 6월 1일</span>
                      <span className="block">시니어를 위한 공간으로</span>
                      <span className="block">곧 찾아뵙겠습니다.</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Quick links - 모바일: 하단 가로 스크롤, lg: 카드형 */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-4 lg:left-[10%] lg:right-auto lg:px-0">
        <div className="flex gap-3 overflow-x-auto pb-2 lg:gap-4">
          {quickLinks.map((c) => (
            <Link key={c.title} href={c.href} className={`${c.cls} shrink-0 rounded-xl shadow-lg px-5 py-4 lg:h-[clamp(140px,18vh,200px)] lg:w-[clamp(160px,13vw,240px)] lg:flex lg:flex-col lg:justify-between transition-colors`}>
              <span className="font-bold text-sm lg:text-lg">{c.title}</span>
              <span className="hidden lg:block text-xs opacity-80 mt-1">{c.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
