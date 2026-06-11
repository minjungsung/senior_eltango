import SubPageLayout from '@/components/SubPageLayout';
import Header from '@/components/Header';

const meals = {
  아침: ['흰쌀밥, 미역국', '잡곡밥, 된장찌개', '흰쌀밥, 북어국', '잡곡밥, 소고기무국', '흰쌀밥, 콩나물국'],
  점심: ['비빔밥, 계란국', '돈까스, 샐러드', '칼국수, 김밥', '불고기덮밥, 무국', '생선구이, 잡채'],
  간식: ['과일, 요거트', '호떡, 우유', '고구마, 녹차', '떡, 식혜', '과일, 주스'],
};

const days = ['월', '화', '수', '목', '금'];

export default function MenuPage() {
  return (
    <><Header />
      <SubPageLayout section="notice">
        <h2 className="text-2xl font-bold mb-6">식단표</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-3 border border-gray-200 w-20"></th>
                {days.map((d) => (
                  <th key={d} className="py-3 px-3 border border-gray-200 text-center">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(meals).map(([row, items]) => (
                <tr key={row}>
                  <td className="py-3 px-3 border border-gray-200 font-medium text-center bg-gray-50">{row}</td>
                  {items.map((item, i) => (
                    <td key={i} className="py-3 px-3 border border-gray-200 text-center">{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">※ 식단은 계절 및 식재료 수급에 따라 변경될 수 있습니다.</p>
      </SubPageLayout>
    </>
  );
}
