import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:siteConfig.name,
    template:`%s | ${siteConfig.name}`
  },
  description: siteConfig.desciption,
  icons:[
    {
      url:"/logo.svg",
      href:"/logo.svg",
    }
    
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
