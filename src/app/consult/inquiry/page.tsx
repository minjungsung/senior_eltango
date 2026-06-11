import SubPageLayout from '@/components/SubPageLayout';
import Header from '@/components/Header';

export default function InquiryPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="consult">
        <h1 className="text-2xl font-bold mb-6">상담 문의</h1>
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
              <label className="block mb-1 font-medium">이메일</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">문의내용</label>
              <textarea rows={5} className="w-full border rounded px-3 py-2" />
            </div>
            <button type="button" className="bg-tango text-white px-6 py-2 rounded">문의하기</button>
          </form>
          <aside className="space-y-2 text-sm">
            <p className="font-bold">전화 · 문자</p>
            <p className="text-lg font-semibold text-tango">010-2415-0563</p>
            <p className="text-storm">평일 낮에는 전화,{"\n"}그 외 시간은 문자가 빨라요.</p>
            <p className="mt-4 font-bold">이메일</p>
            <p>fishlow0@daum.net</p>
            <p className="mt-4 font-bold">오시는 길</p>
            <p className="text-storm">서초구 주흥길 12{"\n"}환희빌딩 2층</p>
          </aside>
        </div>
      </SubPageLayout>
    </>
  );
}
