import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import UserHeader from "@/components/header/userHeader";
import { ActiveProvider } from "@/components/contexts/activeModalCreatPostContext";
import { UserIdProvider } from "@/components/contexts/userIdContext";
import { ActiveShowPostsDownProvider } from "@/components/contexts/activeShowPostsDownStoryContext";
import { ActiveShowPostsUpProvider } from "@/components/contexts/activeShowPostsUpStoryContext";
import { ActiveMenuProvider } from "@/components/contexts/activeToggleMenu";
import { SetPagesProvider } from "@/components/contexts/setPageUserContext";
import { SetPagePostsProvider } from "@/components/contexts/setPagePostsContext";

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
      >
        <UserIdProvider>
          <ActiveProvider>
          <ActiveShowPostsDownProvider>
          <ActiveShowPostsUpProvider>
          <ActiveMenuProvider>
          <SetPagesProvider>
          <SetPagePostsProvider>
          
            {children} 
          </SetPagePostsProvider>  
          </SetPagesProvider>
          </ActiveMenuProvider>
          </ActiveShowPostsUpProvider>
          </ActiveShowPostsDownProvider>
          </ActiveProvider>
        </UserIdProvider>
      
        
      </body>
    </html>
  );
}
