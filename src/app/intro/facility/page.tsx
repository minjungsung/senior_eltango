import Header from '@/components/Header'
import SubPageLayout from '@/components/SubPageLayout'

const facilities = [
  { name: '활동공간', floor: '2층', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop&q=75' },
  { name: '휴식공간', floor: '2층', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=75' },
  { name: '식사공간', floor: '1층', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=75' },
  { name: '상담실', floor: '1층', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=75' },
]

export default function FacilityPage() {
  return (
    <>
      <Header />
      <SubPageLayout section="intro">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">시설 안내</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {facilities.map((f) => (
            <div key={f.name} className="rounded-xl overflow-hidden bg-gray-50">
              <div className="aspect-video">
                <img src={f.img} alt={f.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold">{f.name}</h3>
                <p className="text-xs sm:text-sm text-storm">{f.floor}</p>
              </div>
            </div>
          ))}
        </div>
      </SubPageLayout>
    </>
  )
}
