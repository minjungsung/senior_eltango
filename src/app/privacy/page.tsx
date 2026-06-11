import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="pt-20 lg:pt-24">
        <div className="max-w-[900px] mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold">개인정보취급방침</h1>

          <h2 className="font-semibold mt-6 mb-2">1. 개인정보의 수집 및 이용 목적</h2>
          <p className="text-storm">회사는 서비스 제공, 회원 관리, 마케팅 및 광고 활용 등을 위해 개인정보를 수집·이용합니다.</p>

          <h2 className="font-semibold mt-6 mb-2">2. 수집하는 개인정보 항목</h2>
          <p className="text-storm">이름, 이메일 주소, 연락처, 서비스 이용 기록, 접속 로그, 쿠키 등의 정보를 수집할 수 있습니다.</p>

          <h2 className="font-semibold mt-6 mb-2">3. 개인정보의 보유 및 이용기간</h2>
          <p className="text-storm">회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 따라 보존할 필요가 있는 경우 일정 기간 보관합니다.</p>

          <h2 className="font-semibold mt-6 mb-2">4. 개인정보의 파기</h2>
          <p className="text-storm">전자적 파일 형태의 정보는 복구할 수 없는 방법으로 영구 삭제하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각합니다.</p>

          <h2 className="font-semibold mt-6 mb-2">5. 이용자의 권리</h2>
          <p className="text-storm">이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 개인정보의 수집·이용에 대한 동의를 철회할 수 있습니다.</p>
        </div>
      </div>
    </>
  );
}
