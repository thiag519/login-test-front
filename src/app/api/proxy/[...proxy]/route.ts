import { NextRequest, NextResponse } from "next/server";



export const proxyRequest = async (req: NextRequest,proxy: string[] , method: string) => {
  try {
    const token = req.cookies.get("token" )?.value;

    const backendUrl =  `http://localhost:3001/${proxy.join('/')}`;

    //console.log("URL: ",backendUrl);

    const httpMethod = method.toUpperCase();
    //console.log("Method: ",httpMethod);

    let body:any= undefined;

    const contetLength = req.headers.get("content-length");

    if (method !== "GET" && contetLength && contetLength !== "0" ) {
      body = await req.json()
    } 

    //const body = httpMethod !== "GET" ? await req.json()  : undefined;

    const response = await fetch(backendUrl, {
      method: httpMethod,
      headers:{
       // "Content-Type": "application/json",
        ...(body && {"Content-Type": "application/json"}),
        ...(token && {Authorization: `Bearer ${token}`}),
      },
      body: body? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    return NextResponse.json(data, {status: response.status});
  } catch (error: any) {
    console.error("Proxy request error:", error);
    return NextResponse.json(
      { message: "Erro na requisição" },
      { status: 500 }
    );
  }
};

export async function GET(
  req:NextRequest,
  context: {params: Promise<{proxy: string[]}>}
) {
  const {proxy} = await context.params;
  return await proxyRequest(req, proxy, "GET")
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
  context:{ params: Promise<{proxy: string[]}>}
) {
  const {proxy} = await context.params;
  return await proxyRequest(req, proxy, "PUT")
}

export async function DELETE(
  req:NextRequest,
  context:{ params: Promise<{proxy: string[]}>}
) {
  const {proxy} = await context.params
  return await proxyRequest(req, proxy, "DELETE")
}

export async function PATCH(
  req:NextRequest,
  context:{ params: Promise<{proxy: string[]}>}
) {
  const {proxy} = await context.params
  return await proxyRequest(req, proxy, "PATCH")
}