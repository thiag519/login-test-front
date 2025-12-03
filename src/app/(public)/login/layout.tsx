import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina de login",
  description: "Faça seu login",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="h-screen">
        <h1 className=" flex w-full items-center justify-center h-1/10 bg-gray-950">
          Publica
        </h1>
        {children}
      </body>
    </html>
  );
}
