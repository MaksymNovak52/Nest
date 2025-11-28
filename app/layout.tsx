import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Host_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HYPE Engine",
  description: "Amplify HYPE's upside",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favLogo.png",
        href: "/favLogo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favLogo.png",
        href: "/favLogo.png",
      },
    ],
    apple: "/favLogo.png",
  },
  openGraph: {
    title: "HYPE Engine",
    description: "Amplify HYPE's upside",
    url: "https://thehypeengine.com",
    siteName: "HYPE Engine",
    images: [
      {
        url: "/favLogo.png",
        width: 128,
        height: 128,
        alt: "HYPE Engine Icon",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          antialiased
        `}
      >
        <main
          className="   relative       h-screen
         lg:bg-[url('/bg.png')]
           bg-[url('/bg-mobile.png')]
          bg-no-repeat
          bg-cover
          bg-center"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
