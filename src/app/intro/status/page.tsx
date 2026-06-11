import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

const info = [
  { label: '기관명', value: '웰니스 탱고 스튜디오 엘땅고' },
  { label: '설립일', value: '2026년 6월 1일' },
  { label: '대표자', value: '이인경' },
  { label: '정원', value: '29명' },
  { label: '운영시간', value: '월~금 09:00~18:00' },
  { label: '연락처', value: '010-2415-0563' },
]

export default function StatusPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">기관현황</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {info.map((item) => (
            <div key={item.label} className="bg-warm rounded-xl p-4 sm:p-5 border border-tango/10">
              <p className="text-xs text-storm mb-1">{item.label}</p>
              <p className="text-base sm:text-lg font-semibold text-beluga">{item.value}</p>
            </div>
          ))}
        </div>
      </SubPageLayout>
    </>
  )
}
