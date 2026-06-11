import SubPageLayout from '@/components/SubPageLayout';
import Header from '@/components/Header';

const notices = [
  { id: 5, title: '웰니스 웰니스 탱고 스튜디오 엘땅고 엘땅고 오픈 안내', date: '2026-06-10', views: 42 },
  { id: 4, title: '6월 프로그램 일정 안내', date: '2026-06-05', views: 38 },
  { id: 3, title: '여름철 냉방기기 운영 안내', date: '2026-06-01', views: 25 },
  { id: 2, title: '주차장 이용 안내사항', date: '2026-05-28', views: 19 },
  { id: 1, title: '5월 행사 사진 공유', date: '2026-05-20', views: 31 },
];

export default function NoticeListPage() {
  return (
    <><Header />
      <SubPageLayout section="notice">
        <h2 className="text-2xl font-bold mb-6">공지사항</h2>
        <table className="w-full text-sm border-t border-gray-300">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="py-3 px-2 text-center w-16">번호</th>
              <th className="py-3 px-2 text-left">제목</th>
              <th className="py-3 px-2 text-center w-28">작성일</th>
              <th className="py-3 px-2 text-center w-16">조회</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n) => (
              <tr key={n.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2 text-center">{n.id}</td>
                <td className="py-3 px-2">{n.title}</td>
                <td className="py-3 px-2 text-center">{n.date}</td>
                <td className="py-3 px-2 text-center">{n.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3].map((p) => (
            <button key={p} className="w-8 h-8 rounded border border-gray-300 text-sm hover:bg-gray-100 data-[active=true]:bg-gray-800 data-[active=true]:text-white" data-active={p === 1}>
              {p}
            </button>
          ))}
        </div>
      </SubPageLayout>
    </>
  );
}
