import type { Metadata } from "next";

import LoginHeader from "@/components/header/loginHeader";

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
    <>
      <LoginHeader/>
      {children}
    </>
  );
}
