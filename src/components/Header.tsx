'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  {
    label: '센터소개',
    href: '/intro/brand',
    sub: [
      { label: '브랜드 스토리', href: '/intro/brand' },
      { label: '시설 안내', href: '/intro/facility' },
      { label: '기관현황', href: '/intro/status' },
      { label: '오시는길', href: '/intro/location' },
    ],
  },
  {
    label: '프로그램 안내',
    href: '/program/schedule',
    sub: [
      { label: '월간 일정', href: '/program/schedule' },
      { label: 'eltango Clinic', href: '/program/checkup' },
      { label: '프로그램', href: '/program/list' },
    ],
  },
  {
    label: '비용',
    href: '/cost/info',
    sub: [
      { label: '비용안내', href: '/cost/info' },
      { label: '장기요양보험신청', href: '/cost/insurance' },
    ],
  },
  {
    label: '알림마당',
    href: '/notice/list',
    sub: [
      { label: '공지사항', href: '/notice/list' },
      { label: '식단표', href: '/notice/menu' },
      { label: '활동앨범', href: '/notice/album' },
    ],
  },
  {
    label: '상담하기',
    href: '/consult/inquiry',
    sub: [
      { label: '상담 문의', href: '/consult/inquiry' },
      { label: '질문,답변', href: '/consult/faq' },
      { label: '견학신청', href: '/consult/visit' },
    ],
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beluga h-20 lg:h-24 flex items-center px-6">
      <Link href="/" className="text-tango font-black text-xl lg:text-2xl">
        ELTANGO
      </Link>

      <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white font-black hover:text-tango transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className="lg:hidden ml-auto text-white"
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-beluga z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setOpen(false)}
          aria-label="메뉴 닫기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="mt-20 px-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="text-white font-black text-lg hover:text-tango transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              <ul className="mt-2 ml-3 space-y-1">
                {item.sub.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      className="text-white/70 text-sm hover:text-tango transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </header>
  )
}
