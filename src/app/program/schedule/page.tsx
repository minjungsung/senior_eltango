import Header from '@/components/Header';
import SubPageLayout from '@/components/SubPageLayout';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function SchedulePage() {
  const year = 2026;
  const month = 6;
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const blanks: (number | null)[] = Array.from({ length: firstDay }, () => null);
  const days: (number | null)[] = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const cells = [...blanks, ...days];

  return (
    <>
      <Header />
      <SubPageLayout section="program">
        <h1 className="text-3xl font-bold mb-6">월간 일정</h1>
        <p className="text-lg mb-4">2026년 6월</p>
        <div className="grid grid-cols-7 gap-1 mb-6">
          {DAYS.map((d) => (
            <div key={d} className="text-center font-semibold py-2">{d}</div>
          ))}
          {cells.map((day, i) => (
            <div key={i} className="text-center py-3 border rounded">
              {day ?? ''}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500">※ 일정은 센터 사정에 따라 변경될 수 있습니다.</p>
      </SubPageLayout>
    </>
  );
}
