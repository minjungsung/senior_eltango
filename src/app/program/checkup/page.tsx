import Header from '@/components/Header';
import SubPageLayout from '@/components/SubPageLayout';

const SERVICES = [
  '첫 검진',
  '상비약 제공',
  '운동 모니터링',
  '건강체크 상담',
  '분기별 점검',
];

export default function CheckupPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="program">
        <h1 className="text-3xl font-bold mb-2">eltango Clinic</h1>
        <p className="text-lg text-gray-600 mb-4">한의원 검진 프로그램</p>
        <p className="mb-6">
          eltango Clinic과 협력하여 시니어 건강을 위한 한의원 검진 프로그램을 운영하고 있습니다.
        </p>
        <ul className="space-y-3">
          {SERVICES.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              {s}
              <span className="text-sm text-green-600 font-medium">무료</span>
            </li>
          ))}
        </ul>
      </SubPageLayout>
    </>
  );
}
