import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-gray-100 px-4 sm:px-6 py-4 max-w-[1300px] mx-auto">
        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-storm">
          <Link href="/privacy" className="hover:text-tango">개인정보취급방침</Link>
          <Link href="/terms" className="hover:text-tango">이용약관</Link>
          <Link href="/consult/inquiry" className="hover:text-tango">1:1문의</Link>
        </div>
        <div className="flex gap-2">
          {['Y', 'B', 'I', 'F'].map((s) => (
            <a key={s} href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-[10px] text-storm hover:bg-tango hover:text-white transition">{s}</a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-8 px-4 sm:px-6 py-8 max-w-[1300px] mx-auto lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs text-storm">전화 · 문자</p>
          <p className="text-base font-semibold text-tango">010-2415-0563</p>
          <p className="text-xs text-storm">이메일</p>
          <p className="text-sm text-beluga">fishlow0@daum.net</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['블로그', '유튜브', '인스타그램'].map((s) => (
              <a key={s} href="#" className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-storm hover:border-tango hover:text-tango transition">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden h-48 sm:min-h-[220px] border border-gray-100">
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
          <p className="mt-3 text-xs sm:text-sm text-storm">서초구 주흥길 12, 환희빌딩 2층</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100 px-4 sm:px-6 py-5 max-w-[1300px] mx-auto text-center text-[10px] sm:text-xs text-storm/70 space-y-1">
        <p>웰니스 탱고 스튜디오 엘땅고 | 대표: 이인경 | 서초구 주흥길 12, 환희빌딩 2층</p>
        <p>전화: 010-2415-0563 | 이메일: fishlow0@daum.net</p>
        <p className="mt-2">© 2024 eltango All rights reserved.</p>
      </div>
    </footer>
  );
}
