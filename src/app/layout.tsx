import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "엘땅고 | 시니어 맞춤 건강 주간보호센터",
  description:
    "웰니스 탱고 스튜디오 엘땅고는 시니어를 위한 주간보호센터입니다. 맞춤 운동과 한방 치료로 시니어가 건강하게 생활할 수 있도록 돕습니다.",
  keywords:
    "엘땅고,주간보호센터,시니어 건강,시니어 운동,시니어 탱고,엘땅고 클리닉",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
