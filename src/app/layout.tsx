import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.scss";
import "ress";

export const metadata: Metadata = {
  title: "Hasegawa Akito's portfolio",
  description: "Hasegawa Akito's portfolio",
};

import { Roboto } from "next/font/google";
const myfont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={myfont.className}>{children}</body>
      <Analytics />
    </html>
  );
}
