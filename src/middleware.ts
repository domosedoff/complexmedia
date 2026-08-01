import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const user = process.env.SEO_DASHBOARD_USER;
  const password = process.env.SEO_DASHBOARD_PASSWORD;

  if (!user || !password) {
    return new NextResponse("SEO dashboard is not configured", { status: 503 });
  }

  try {
    const [scheme, credentials] =
      request.headers.get("authorization")?.split(" ") ?? [];
    const decoded =
      scheme === "Basic" && credentials ? atob(credentials) : "";
    const separator = decoded.indexOf(":");
    const login = separator >= 0 ? decoded.slice(0, separator) : "";
    const secret = separator >= 0 ? decoded.slice(separator + 1) : "";

    if (login === user && secret === password) {
      return NextResponse.next();
    }
  } catch {
    // Некорректный Authorization обрабатывается как отсутствие доступа.
  }

  return new NextResponse("Требуется авторизация", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="ComplexMedia SEO"' },
  });
}

export const config = {
  matcher: "/seo-dashboard/:path*",
};
