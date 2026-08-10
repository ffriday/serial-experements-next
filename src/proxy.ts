import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except API, Next internals, and static files (with a dot).
  // Unprefixed paths must be included for localePrefix: 'as-needed'.
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
