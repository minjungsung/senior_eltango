import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-beluga text-white">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/20 px-4 sm:px-6 py-4">
        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
          <Link href="/privacy" className="hover:underline">개인정보취급방침</Link>
          <Link href="/terms" className="hover:underline">이용약관</Link>
          <Link href="/consult/inquiry" className="hover:underline">1:1문의</Link>
        </div>
        <div className="flex gap-2">
          {['Y', 'B', 'I', 'F'].map((s) => (
            <a key={s} href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[10px] text-white/70">{s}</a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-8 px-4 sm:px-6 py-8 lg:grid-cols-2">
        <div>
          <p className="text-xs text-white/60">전화 · 문자</p>
          <p className="mt-1 text-sm font-semibold text-tango">010-2415-0563</p>
          <p className="mt-3 text-xs text-white/60">이메일</p>
          <p className="mt-1 text-sm">fishlow0@daum.net</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['블로그', '유튜브', '인스타그램'].map((s) => (
              <a key={s} href="#" className="rounded-full border border-white/30 px-3 py-1.5 text-xs hover:bg-white/10">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden h-48 sm:min-h-[240px]">
            <iframe
              src="https://map.kakao.com/link/map/엘땅고,37.4836,127.0157"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="엘땅고 위치"
            />
          </div>
          <p className="mt-3 text-xs sm:text-sm text-white/70 whitespace-pre-line md:whitespace-normal">서초구 주흥길 12{"\n"}환희빌딩 2층, 서울탱고아카데미 엘땅고</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 px-4 sm:px-6 py-5 text-center text-[10px] sm:text-xs text-white/50 space-y-1">
        <p>(주)엘땅고 | 대표: 정승찬 | 서초구 주흥길 12, 환희빌딩 2층</p>
        <p>사업자등록번호: 319-86-02420 | 전화: 010-2415-0563</p>
        <p className="mt-2">© 2022 (주)엘땅고 ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
