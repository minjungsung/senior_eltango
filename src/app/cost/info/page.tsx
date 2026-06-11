import SubPageLayout from '@/components/SubPageLayout'
import Header from '@/components/Header'

export default function CostInfoPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="cost">
        <h2>비용안내</h2>
        <p>장기요양등급에 따른 본인부담금 안내</p>
        <table>
          <thead>
            <tr>
              <th>등급</th>
              <th>월 이용료</th>
              <th>본인부담금(일반)</th>
              <th>본인부담금(감경)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1등급</td><td>1,800,000원</td><td>270,000원</td><td>135,000원</td></tr>
            <tr><td>2등급</td><td>1,600,000원</td><td>240,000원</td><td>120,000원</td></tr>
            <tr><td>3등급</td><td>1,400,000원</td><td>210,000원</td><td>105,000원</td></tr>
            <tr><td>4등급</td><td>1,200,000원</td><td>180,000원</td><td>90,000원</td></tr>
            <tr><td>5등급</td><td>1,000,000원</td><td>150,000원</td><td>75,000원</td></tr>
          </tbody>
        </table>
        <p>
          ※ 실제 비용은 등급과 이용일수에 따라 달라질 수 있습니다. 자세한 사항은 전화 문의 바랍니다.
        </p>
        <p>☎ 010-2415-0563</p>
      </SubPageLayout>
    </>
  )
}
