import Header from '@/components/Header';

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="pt-20 lg:pt-24">
        <div className="max-w-[900px] mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold">이용약관</h1>

          <h2 className="font-semibold mt-6 mb-2">제1조 (목적)</h2>
          <p className="text-storm">본 약관은 회사가 제공하는 서비스의 이용 조건 및 절차, 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>

          <h2 className="font-semibold mt-6 mb-2">제2조 (정의)</h2>
          <p className="text-storm">&quot;서비스&quot;란 회사가 제공하는 모든 온라인 서비스를 의미하며, &quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 자를 말합니다.</p>

          <h2 className="font-semibold mt-6 mb-2">제3조 (약관의 효력)</h2>
          <p className="text-storm">본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다. 회사는 필요한 경우 약관을 변경할 수 있습니다.</p>

          <h2 className="font-semibold mt-6 mb-2">제4조 (서비스 이용)</h2>
          <p className="text-storm">서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.</p>

          <h2 className="font-semibold mt-6 mb-2">제5조 (책임 제한)</h2>
          <p className="text-storm">회사는 천재지변, 불가항력 등으로 인한 서비스 중단에 대해 책임을 지지 않으며, 이용자의 귀책사유로 인한 서비스 이용 장애에 대해서도 책임을 지지 않습니다.</p>
        </div>
      </div>
    </>
  );
}
