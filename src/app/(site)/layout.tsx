import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tom Knighton",
  description: "Portofilio site for Tom Knighton - Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor: '#121829'}}>
      <body
        className={`${inter.className} antialiased`}
        style={{backgroundColor: '#121829'}}
      >
        {children}
      </body>
    </html>
  );
}
