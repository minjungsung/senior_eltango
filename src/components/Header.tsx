"use client";
import { useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

const navItems = [
  { label: "센터소개", href: "/intro/brand" },
  { label: "프로그램 안내", href: "/program/schedule" },
  { label: "비용", href: "/cost/info" },
  { label: "알림마당", href: "/notice/list" },
  { label: "상담하기", href: "/consult/inquiry" },
];

const mobileNav = [
  { title: "센터소개", items: [{ label: "브랜드 스토리", href: "/intro/brand" }, { label: "시설 안내", href: "/intro/facility" }, { label: "기관현황", href: "/intro/status" }, { label: "오시는길", href: "/intro/location" }] },
  { title: "프로그램 안내", items: [{ label: "월간 일정", href: "/program/schedule" }, { label: "eltango Clinic", href: "/program/checkup" }, { label: "프로그램", href: "/program/list" }] },
  { title: "비용", items: [{ label: "비용안내", href: "/cost/info" }, { label: "장기요양보험신청", href: "/cost/insurance" }] },
  { title: "알림마당", items: [{ label: "공지사항", href: "/notice/list" }, { label: "식단표", href: "/notice/menu" }, { label: "활동앨범", href: "/notice/album" }] },
  { title: "상담하기", items: [{ label: "상담 문의", href: "/consult/inquiry" }, { label: "질문,답변", href: "/consult/faq" }, { label: "견학신청", href: "/consult/visit" }] },
];

function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl overflow-y-auto">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="p-2 text-storm" aria-label="닫기">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="px-4 pb-8">
          {mobileNav.map((section) => (
            <div key={section.title} className="mb-4">
              <p className="text-xs font-bold text-tango uppercase tracking-wide mb-2">{section.title}</p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}><Link href={item.href} onClick={onClose} className="block py-2 px-3 text-sm text-beluga/80 hover:bg-warm rounded-md">{item.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </div>,
    document.body
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-tango tracking-tight">ELTANGO</Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-beluga/80 hover:text-tango transition rounded-md">{item.label}</Link>
            ))}
          </nav>
          <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-beluga" aria-label="메뉴 열기">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>
      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
