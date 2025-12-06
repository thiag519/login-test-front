import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import Header from "@/components/header/header";
import UserHeader from "@/components/pages/user/userHeader";
import { ActiveProvider } from "@/components/contexts/activeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usuário",
  description: "Área do usuário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><UserHeader />
      <ActiveProvider>
        {children}
      </ActiveProvider>
        
      </body>
    </html>
  );
}
