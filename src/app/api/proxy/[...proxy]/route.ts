import { NextRequest, NextResponse } from "next/server";



export const proxyRequest = async (req: NextRequest,proxy: string[] , method: string) => {
  try {
    const token = req.cookies.get("token" )?.value;

    const backendUrl = await `http://localhost:3001/${proxy.join('/')}`;

    console.log("URL: ",backendUrl);

    const httpMethod = method.toUpperCase();

    const body = httpMethod !== "GET" ? await req.json()  : undefined;

    const response = await fetch(backendUrl, {
      method: httpMethod,
      headers:{
        "Content-Type": "application/json",
        ...(token && {Authorization: `Bearer ${token}`}),
      },
      body: body? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    return NextResponse.json(data, {status: response.status});
  } catch (error: any) {
    return NextResponse.json(
      { message: error.response?.data || "Erro na requisição" },
      { status: error.response?.status || 500 }
    );
  }
};

export async function GET(
  req:NextRequest,
  context: {params: Promise<{proxy: string[]}>}
) {
  const {proxy} = await context.params;
  return proxyRequest(req, proxy, "GET")
}

export async function POST(
  req:NextRequest,
  context:{ params: Promise<{proxy: string[]}>}
) {
  const {proxy} = await context.params;
  return await proxyRequest(req, proxy, "POST")
}

export async function PUT(
  req:NextRequest,
  context:{ params: {proxy: string[]}}
) {
  const {proxy} = await context.params;
  return proxyRequest(req, proxy, "PUT")
}

export async function DELETE(
  req:NextRequest,
  context:{ params: Promise<{proxy: string[]}>}
) {
  const {proxy} = await context.params
  return proxyRequest(req,proxy, "DELETE")
}