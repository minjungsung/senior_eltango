import Link from 'next/link';

export default function FacilitySection() {
  return (
    <section className="w-full bg-white py-12 sm:pb-16 md:pb-24 px-4">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-left leading-snug">
            <span className="whitespace-pre-line md:whitespace-normal"><span className="text-tango">eltango</span>{"는\n시니어들을 위한\n특별한 공간을 제공합니다."}</span>
          </h2>
          <Link href="/intro/facility" className="text-xs sm:text-sm border rounded-lg px-3 py-2 hover:bg-tango hover:text-white transition shrink-0 whitespace-nowrap">자세히 보기</Link>
        </div>
        <div className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/9]">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=800&fit=crop&q=75" alt="시설" className="absolute inset-0 h-full w-full object-cover sm:hidden" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&h=700&fit=crop&q=80" alt="시설" className="absolute inset-0 h-full w-full object-cover hidden sm:block" loading="lazy" />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-beluga/85 backdrop-blur px-4 py-2 sm:px-5 sm:py-3 rounded-lg">
            <h3 className="text-base sm:text-lg font-bold text-white">활동공간</h3>
            <p className="text-xs sm:text-sm text-white/80">2층</p>
          </div>
        </div>
      </div>
    </section>
  );
}
