import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

export default function BrandPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">브랜드 스토리</h1>
        <div className="space-y-8">
          <div className="bg-warm rounded-xl p-6 sm:p-8 border border-tango/10">
            <p className="text-sm sm:text-base text-beluga/80 leading-relaxed">
              <span className="whitespace-pre-line md:whitespace-normal">{"웰니스 탱고 스튜디오 엘땅고는\n시니어를 위한 프리미엄 주간보호센터입니다.\n\n강남에서 17년간 아르헨티나 탱고를 가르쳐온\n이인경 대표가 시니어 건강을 위해\n새롭게 시작하는 공간입니다."}</span>
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-tango mb-3">우리의 비전</h2>
            <p className="text-sm sm:text-base text-beluga/80 leading-relaxed">
              <span className="whitespace-pre-line md:whitespace-normal">{"시니어가 건강하고 활기찬\n하루를 보낼 수 있도록,\n춤과 음악, 사람의 온기가 있는\n공간을 만듭니다."}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: '🎯', title: '전문성', desc: '17년 탱고 교육 경험' },
              { icon: '🤝', title: '따뜻함', desc: '사람과 교감하는 공간' },
              { icon: '✨', title: '혁신', desc: '한방 의료 + 맞춤 프로그램' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-5 border border-gray-100 text-center">
                <div className="text-2xl mb-2">{v.icon}</div>
                <h3 className="font-bold text-sm">{v.title}</h3>
                <p className="text-xs text-storm mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SubPageLayout>
    </>
  )
}
