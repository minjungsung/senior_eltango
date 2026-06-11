import SubPageLayout from '@/components/SubPageLayout';
import Header from '@/components/Header';

export default function VisitPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="consult">
        <h1 className="text-2xl font-bold mb-6">견학신청</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <form className="md:col-span-2 space-y-4">
            <div>
              <label className="block mb-1 font-medium">이름</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">연락처</label>
              <input type="tel" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">희망 견학일</label>
              <input type="date" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">견학 인원</label>
              <input type="number" min={1} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">문의사항</label>
              <textarea rows={4} className="w-full border rounded px-3 py-2" />
            </div>
            <button type="button" className="bg-tango text-white px-6 py-2 rounded">견학 신청하기</button>
          </form>
          <aside className="space-y-2 text-sm">
            <p className="font-bold">견학 가능 시간</p>
            <p>월~금 10:00~16:00</p>
          </aside>
        </div>
      </SubPageLayout>
    </>
  );
}
