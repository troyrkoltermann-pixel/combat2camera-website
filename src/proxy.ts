import { NextRequest, NextResponse } from "next/server";

const canonicalHost = "combat2camera.org";
const redirectHosts = new Set([
  "www.combat2camera.org",
  "combat2camera.com",
  "www.combat2camera.com",
  "combattocamera.org",
  "www.combattocamera.org",
  "combattocamera.com",
  "www.combattocamera.com",
]);

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const host = request.headers.get("host");

  if (!host || !redirectHosts.has(host)) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.url);
  redirectUrl.protocol = "https:";
  redirectUrl.host = canonicalHost;
  redirectUrl.port = "";
  redirectUrl.pathname = nextUrl.pathname;
  redirectUrl.search = nextUrl.search;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/:path*",
};
