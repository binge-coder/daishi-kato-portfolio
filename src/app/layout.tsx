import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/component/Navbar";
import Footer from "@/components/component/Footer";
import { Inter, Fira_Code } from 'next/font/google'

// const geistSans = localFont({
//   src: "./../../public/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./../../public/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const Outfit = localFont({
//   src: "./../../public/fonts/Outfit-VariableFont_wght.ttf",
//   variable: "--font-outfit",
//   weight: "100 900",
// });

const inter = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Daishi Kato",
  description: "Portfolio of Daishi Kato, a react library author",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden ${inter.className}`}
      >
        <div className="flex min-h-[100dvh] flex-col">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
