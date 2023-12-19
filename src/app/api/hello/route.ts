import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name");

  return new NextResponse(`Hello, ${name ?? "World"}!`);
}
