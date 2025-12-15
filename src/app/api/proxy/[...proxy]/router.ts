import { NextRequest, NextResponse } from "next/server";

export const proxyRequest = async (req: NextRequest, {params}: {params: {
  path: string[]}}, method: string) => {
  const token = req.cookies.get("token" )?.value;

  const backendUrl = `http://localhost:3001/${params.path.join('/')}`;

  const body = method !== "GET" ? await req.json()  : undefined;

  const response = await fetch(backendUrl, {
    method,
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body? JSON.stringify(body) : undefined,
  });

  const data = await response.json();
  return NextResponse.json(data, {status: response.status});
};