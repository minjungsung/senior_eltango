import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

const info = [
  { label: '기관명', value: '웰니스 웰니스 탱고 스튜디오 엘땅고 엘땅고' },
  { label: '설립일', value: '2026년 6월 1일' },
  { label: '대표자', value: '정승찬' },
  { label: '정원', value: '29명' },
  { label: '운영시간', value: '월~금 09:00~18:00' },
]

export default function StatusPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-3xl font-bold text-storm mb-8">기관현황</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {info.map((item) => (
            <div key={item.label} className="bg-beluga rounded-xl p-5">
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <p className="text-lg font-semibold text-storm">{item.value}</p>
            </div>
          ))}
        </div>
      </SubPageLayout>
    </>
  )
}
