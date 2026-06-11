import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

export default function BrandPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-3xl font-bold text-storm mb-6">브랜드 스토리</h1>
        <p className="text-lg text-gray-700 mb-12">
          웰니스 웰니스 탱고 스튜디오 엘땅고 엘땅고는 시니어를 위한 프리미엄 주간보호센터입니다.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-evergreen mb-4">우리의 비전</h2>
          <p className="text-gray-600">
            시니어가 건강하고 활기찬 하루를 보낼 수 있도록
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '전문성', icon: '🎯' },
              { title: '따뜻함', icon: '💛' },
              { title: '혁신', icon: '🚀' },
            ].map((v) => (
              <div key={v.title} className="bg-beluga rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-storm">{v.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </SubPageLayout>
    </>
  )
}
