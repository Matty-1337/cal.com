// DK-CUSTOM: Edge middleware — Railway handles TLS termination at its proxy layer,
// so x-forwarded-proto is always "https" by the time it reaches Next.js.
// HTTPS enforcement is handled at the DNS/proxy level (Cloudflare "Always Use HTTPS").
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico).*)",
  ],
};
