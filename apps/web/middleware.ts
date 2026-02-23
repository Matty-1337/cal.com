// DK-CUSTOM: Force HTTPS redirect on Railway — Railway terminates TLS at its edge
// and forwards requests as HTTP internally, setting x-forwarded-proto to indicate
// the original client protocol.
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const proto = request.headers.get("x-forwarded-proto");
  if (process.env.NODE_ENV === "production" && proto === "http") {
    const host = request.headers.get("host") || "book.mattherrera.com";
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${host}`);
    return NextResponse.redirect(url.toString(), 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|api/).*)",
  ],
};
