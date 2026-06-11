import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

export default function LocationPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">오시는길</h1>
        <p className="text-sm sm:text-base text-gray-700 mb-4">서초구 주흥길 12, 환희빌딩 2층</p>
        <div className="rounded-xl overflow-hidden aspect-video sm:aspect-[16/9] mb-6">
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
        <div className="space-y-3 text-sm sm:text-base">
          <p><span className="font-semibold">전화 · 문자</span> 010-2415-0563</p>
          <p><span className="font-semibold">이메일</span> fishlow0@daum.net</p>
          <p className="text-storm">평일 낮에는 전화, 그 외 시간은 문자가 빨라요.</p>
        </div>
      </SubPageLayout>
    </>
  )
}
