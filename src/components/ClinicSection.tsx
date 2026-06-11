import Link from 'next/link';

export default function ClinicSection() {
  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
          <span className="text-base sm:text-xl md:text-2xl font-bold">eltango</span>
          <span className="text-base sm:text-xl md:text-2xl text-gray-400">×</span>
          <span className="text-base sm:text-xl md:text-2xl font-bold">eltango Clinic</span>
        </div>
        <p className="text-left text-base sm:text-lg md:text-2xl leading-relaxed mb-5">
          <span className="whitespace-pre-line md:whitespace-normal">{"웰니스 탱고 스튜디오 엘땅고와\n엘땅고 클리닉이 함께,\n시니어 건강을 위한\n"}<span className="text-tango font-semibold">한방 의료 · 건강 프로그램</span>{"을\n제공합니다."}</span>
        </p>
        <div className="text-left mb-6">
          <Link href="/program/checkup" className="text-xs sm:text-sm border rounded-lg px-3 py-2 hover:bg-tango hover:text-white transition">자세히 보기</Link>
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[16/10] md:aspect-[16/9] mb-6">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=75" alt="eltango Clinic" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <p className="text-center text-sm sm:text-base text-storm leading-relaxed break-keep">
          주간보호와 한방·건강관리가 하나로 이어져, 첫 검진·상비약·운동 모니터링·건강체크 상담·분기별 점검 등을 무료로 진행해 드립니다.
        </p>
      </div>
    </section>
  );
}
