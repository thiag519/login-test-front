import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;

  /*const isPrivate = req.nextUrl.pathname.startsWith("/user") 
  || req.nextUrl.pathname.startsWith("/post");*/

  if( !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  };
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/user/:path*",
    "/post/:path*"
  ]
};