import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/component/Navbar";
import Footer from "@/components/component/Footer";
// import { Inter, Fira_Code, Fraunces, Comfortaa } from 'next/font/google'
import { Fraunces } from 'next/font/google'


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

// const comfortaa = Comfortaa({ 
//   subsets: ['latin'],
//   variable: '--font-comfortaa',
// })

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: "Daishi Kato",
  description: "Portfolio of Daishi Kato, a leading React library author, known for developing popular state management tools like Zustand, Jotai, and Valtio, and the React Server Components framework, Waku.",
  openGraph: {
    title: "Daishi Kato - React Library Author",
    description: "Explore the portfolio of Daishi Kato, known for creating Zustand, Jotai, Valtio, and Waku.",
    url: "https://daishi-kato.vercel.app", // Your actual URL
    images: [
      {
        url: "https://daishi-kato.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-image.07b13c61.png&w=640&q=75", // Replace with your actual image path
        width: 800,
        height: 600,
        alt: "Daishi Kato Image",
      },
    ],
    siteName: "Daishi Kato",
  },
  twitter: {
    card: "summary_large_image", // or "summary" for smaller image
    site: "@dai_shi", // Replace with your Twitter handle (e.g., @daishi_kato)
    creator: "@kanwarxkaran", // Replace with your Twitter handle (e.g., @daishi_kato)
    title: "Daishi Kato - React Library Author",
    description: "Explore the portfolio of Daishi Kato, creator of Zustand, Jotai, Valtio, and Waku.",
    images: "https://daishi-kato.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-image.07b13c61.png&w=640&q=75", // Your actual Twitter image path
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden ${fraunces.className}`}
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
