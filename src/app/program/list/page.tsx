import Header from '@/components/Header';
import SubPageLayout from '@/components/SubPageLayout';

const PROGRAMS = [
  { title: '시니어 맨손체조', category: '운동', desc: '스트레칭과 맨손체조로 근력과 유연성을 키웁니다.' },
  { title: '인지재활훈련', category: '교육', desc: '두뇌 활동을 통한 인지 기능 향상 프로그램입니다.' },
  { title: '시니어 탱고 댄스', category: '교육', desc: '탱고 댄스를 통해 균형감각과 사회성을 기릅니다.' },
  { title: '미술치료', category: '치료', desc: '미술 활동을 통해 정서적 안정을 도모합니다.' },
  { title: '음악치료', category: '치료', desc: '음악을 활용한 심리·정서 치료 프로그램입니다.' },
  { title: '원예활동', category: '여가', desc: '식물을 가꾸며 정서적 안정과 여가를 즐깁니다.' },
];

export default function ProgramListPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="program">
        <h1 className="text-3xl font-bold mb-6">프로그램</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="rounded-xl bg-gray-50 p-6">
              <span className="inline-block text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700 mb-3">
                {p.category}
              </span>
              <h2 className="text-lg font-semibold mb-2">{p.title}</h2>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </SubPageLayout>
    </>
  );
}
