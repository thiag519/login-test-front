import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import LoginHeader from "@/components/header/loginHeader";
import { UserIdProvider } from "@/components/contexts/userIdContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faça seu login",
  description: "Área de login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <UserIdProvider>
        <LoginHeader />
        {children}
      </UserIdProvider> 
      </body>
    </html>
  );
}
