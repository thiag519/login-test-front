import { NextResponse } from "next/server";

export const POST = () => {
  const res = NextResponse.json({success: true});
  res.cookies.set("token", "", {maxAge: 0});
  return res;
};