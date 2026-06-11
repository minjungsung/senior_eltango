import SubPageLayout from '@/components/SubPageLayout'
import Header from '@/components/Header'

const steps = [
  { number: 1, title: '신청', description: '국민건강보험공단에 장기요양인정 신청서를 제출합니다.' },
  { number: 2, title: '방문조사', description: '공단 직원이 방문하여 심신 상태를 조사합니다.' },
  { number: 3, title: '등급판정', description: '등급판정위원회에서 요양등급을 판정합니다.' },
  { number: 4, title: '이용', description: '등급에 따라 장기요양서비스를 이용합니다.' },
]

export default function InsurancePage() {
  return (
    <>
      <Header />
      <SubPageLayout section="cost">
        <h2>장기요양보험신청</h2>
        <div>
          {steps.map((step) => (
            <div key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <p>신청 대상: 만 65세 이상 또는 노인성 질환자</p>
        <p>국민건강보험공단 ☎ 1577-1000</p>
      </SubPageLayout>
    </>
  )
}
