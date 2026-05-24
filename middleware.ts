import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "./app/lib/auth0";

export async function middleware(request: NextRequest) {

  // 1. Let the Auth0 SDK handle its internal routes (/auth/login, /auth/callback, /auth/logout)
  const authRes = await auth0.middleware(request);


  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes;
  }

  // 2. Check session to protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const session = await auth0.getSession(request);
    if (!session) {
      // Redirect unauthenticated users to our premium /login page
      return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
    }
  }

  // 3. Return the Auth0 response (maintains headers/cookies)
  return authRes;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
