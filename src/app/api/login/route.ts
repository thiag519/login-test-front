import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const apiUrl = process.env.URL_PUBLIC;

  const response = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body),
  });
  if(!response.ok) {
    return NextResponse.json(
      {error: " Credenciais inválidas"},
      {status: 401}
    );

  }
  const data = await response.json();
  const token = data.token.token;
  
  const userId= data.user.id;
  
  const res = NextResponse.json({success: true, userId});

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true, // true em produção
    path: "/",
    maxAge: 60 * 60, // 1 hora
    sameSite: "strict",
  });

  return res;
};