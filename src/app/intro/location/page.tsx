import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

export default function LocationPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-3xl font-bold text-storm mb-8">오시는길</h1>

        <p className="text-gray-700 mb-6">광주광역시 앰코로 38 (오룡동 1114-2)</p>

        <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-gray-500 mb-8">
          지도 영역
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold text-storm">전화</span> 1588-7418
          </p>

          <section>
            <h2 className="text-xl font-semibold text-evergreen mb-2">교통 안내</h2>
            <p className="text-gray-600">대중교통 및 자가용 이용 안내는 추후 업데이트 예정입니다.</p>
          </section>
        </div>
      </SubPageLayout>
    </>
  )
}
