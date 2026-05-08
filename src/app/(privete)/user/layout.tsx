import type { Metadata } from "next";
import { ActiveProvider } from "@/components/contexts/activeModalCreatPostContext";
import { UserIdProvider } from "@/components/contexts/userIdContext";
import { ActiveShowPostsDownProvider } from "@/components/contexts/activeShowPostsDownStoryContext";
import { ActiveShowPostsUpProvider } from "@/components/contexts/activeShowPostsUpStoryContext";
import { ActiveMenuProvider } from "@/components/contexts/activeToggleMenu";
import { SetPagesProvider } from "@/components/contexts/setPageUserContext";
import { SetPagePostsProvider } from "@/components/contexts/setPagePostsContext";
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
  );
}
