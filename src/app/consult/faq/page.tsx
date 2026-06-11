import SubPageLayout from '@/components/SubPageLayout';
import Header from '@/components/Header';

const faqs = [
  { q: '입소 자격은 어떻게 되나요?', a: '만 65세 이상 어르신으로 장기요양등급을 받으신 분이 입소 가능합니다.' },
  { q: '비용은 얼마인가요?', a: '장기요양등급에 따라 본인부담금이 달라지며, 자세한 사항은 전화 상담을 통해 안내드립니다.' },
  { q: '프로그램은 어떤 것들이 있나요?', a: '인지활동, 신체활동, 정서지원, 여가활동 등 다양한 프로그램을 운영하고 있습니다.' },
  { q: '견학은 어떻게 신청하나요?', a: '전화 또는 홈페이지 견학신청 페이지를 통해 사전 예약 후 방문하실 수 있습니다.' },
  { q: '식사는 제공되나요?', a: '영양사가 관리하는 균형 잡힌 식단으로 하루 세 끼와 간식이 제공됩니다.' },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="consult">
        <h1 className="text-2xl font-bold mb-6">자주 묻는 질문</h1>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="border rounded p-4">
              <summary className="font-medium cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </SubPageLayout>
    </>
  );
}
