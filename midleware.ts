import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/my-article"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("tkn")?.value;

  const isProtected = protectedRoutes.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}
