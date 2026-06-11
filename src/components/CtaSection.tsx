import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="px-4 py-10 sm:py-12 md:px-6">
      <div className="relative mx-auto py-14 sm:py-20 md:py-28 bg-warm rounded-2xl text-center px-4 border border-tango/10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-tango">eltango</h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-beluga/80 whitespace-pre-line md:whitespace-normal">
          {"궁금한 점이 있으시면\n언제든 연락주세요!"}
        </p>
        <p className="mt-1 text-xs sm:text-sm text-storm">010-2415-0563</p>
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/consult/visit" className="w-full sm:w-auto rounded-lg bg-tango px-6 py-3 text-sm sm:text-base font-semibold text-white text-center hover:bg-tango/90 transition">견학 신청</Link>
          <Link href="/consult/inquiry" className="w-full sm:w-auto rounded-lg border-2 border-tango/30 px-6 py-3 text-sm sm:text-base font-semibold text-tango text-center hover:bg-tango hover:text-white transition">상담 및 문의</Link>
        </div>
      </div>
    </section>
  );
}
