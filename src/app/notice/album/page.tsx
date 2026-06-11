import SubPageLayout from '@/components/SubPageLayout';
import Header from '@/components/Header';

const albums = [
  { title: '시니어 탱고 댄스', date: '2026-06-08' },
  { title: '인지재활훈련', date: '2026-06-05' },
  { title: '미술치료 시간', date: '2026-06-03' },
  { title: '원예활동 프로그램', date: '2026-05-30' },
  { title: '음악치료 수업', date: '2026-05-27' },
  { title: '요리활동 시간', date: '2026-05-24' },
];

export default function AlbumPage() {
  return (
    <><Header />
      <SubPageLayout section="notice">
        <h2 className="text-2xl font-bold mb-6">활동앨범</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {albums.map((album) => (
            <div key={album.title} className="group">
              <div className="aspect-square bg-gray-100 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
              <p className="mt-2 font-medium text-sm">{album.title}</p>
              <p className="text-xs text-gray-500">{album.date}</p>
            </div>
          ))}
        </div>
      </SubPageLayout>
    </>
  );
}
