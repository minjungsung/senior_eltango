import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

const facilities = [
  { name: '활동공간', floor: '2층' },
  { name: '휴식공간', floor: '2층' },
  { name: '식사공간', floor: '1층' },
  { name: '상담실', floor: '1층' },
]

export default function FacilityPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-3xl font-bold text-storm mb-8">시설 안내</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((f) => (
            <div key={f.name} className="rounded-xl bg-gray-100 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-tango/20 to-evergreen/20" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-storm">{f.name}</h3>
                <p className="text-sm text-gray-500">{f.floor}</p>
              </div>
            </div>
          ))}
        </div>
      </SubPageLayout>
    </>
  )
}
