"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData: Record<string, { title: string; items: { label: string; href: string }[] }> = {
  intro: {
    title: "센터소개",
    items: [
      { label: "브랜드 스토리", href: "/intro/brand" },
      { label: "시설 안내", href: "/intro/facility" },
      { label: "기관현황", href: "/intro/status" },
      { label: "오시는길", href: "/intro/location" },
    ],
  },
  program: {
    title: "프로그램 안내",
    items: [
      { label: "월간 일정", href: "/program/schedule" },
      { label: "eltango Clinic", href: "/program/checkup" },
      { label: "프로그램", href: "/program/list" },
    ],
  },
  cost: {
    title: "비용",
    items: [
      { label: "비용안내", href: "/cost/info" },
      { label: "장기요양보험신청", href: "/cost/insurance" },
    ],
  },
  notice: {
    title: "알림마당",
    items: [
      { label: "공지사항", href: "/notice/list" },
      { label: "식단표", href: "/notice/menu" },
      { label: "활동앨범", href: "/notice/album" },
    ],
  },
  consult: {
    title: "상담하기",
    items: [
      { label: "상담 문의", href: "/consult/inquiry" },
      { label: "질문,답변", href: "/consult/faq" },
      { label: "견학신청", href: "/consult/visit" },
    ],
  },
};

export default function SubPageLayout({ children, section }: { children: React.ReactNode; section: string }) {
  const pathname = usePathname();
  const nav = navData[section];
  const currentItem = nav?.items.find((i) => i.href === pathname);

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Banner */}
      <div className="relative h-36 sm:h-48 md:h-64 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=75" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-beluga/70" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{nav?.title}</h1>
          {currentItem && <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/80">{currentItem.label}</p>}
        </div>
      </div>

      {/* Mobile tab nav */}
      <div className="lg:hidden overflow-x-auto border-b bg-white sticky top-20 z-20">
        <div className="flex">
          {nav?.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition ${
                pathname === item.href ? "border-tango text-tango" : "border-transparent text-storm"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1300px] px-4 py-6 sm:py-10 md:py-16 lg:flex lg:gap-10">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block lg:w-52 shrink-0">
          <h2 className="text-lg font-bold text-beluga border-b-2 border-tango pb-2 mb-4">{nav?.title}</h2>
          <ul className="space-y-1">
            {nav?.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2.5 rounded-md text-sm transition ${
                    pathname === item.href ? "bg-tango text-white font-semibold" : "text-storm hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
