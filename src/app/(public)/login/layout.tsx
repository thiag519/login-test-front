import type { Metadata } from "next";
import LoginHeader from "@/components/header/loginHeader";
import { UserIdProvider } from "@/components/contexts/userIdContext";


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
      <UserIdProvider>
        <LoginHeader />
        {children}
      </UserIdProvider> 
  );
}
