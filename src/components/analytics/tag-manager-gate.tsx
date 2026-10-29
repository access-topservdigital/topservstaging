"use client";

import { usePathname } from "next/navigation";
import { TagManager, TagManagerNoScript } from "@/components/analytics/tag-manager";

/**
 * Keeps the 2 Google tags off /admin.
 *
 * WHY. The container used to load on every route, so every click around the
 * leads table, the content editor and the conversations view landed in the
 * same property as prospect traffic. Shaw asked for it off on 29 October.
 * The team's own sessions are the easiest analytics contamination there is
 * to remove and the hardest to spot once it is in the data.
 *
 * WHY A CLIENT COMPONENT. The root layout wraps /admin as well, and a root
 * layout cannot read the pathname on the server. usePathname can, including
 * during the server render, so the tags are absent from the HTML of an
 * /admin page rather than loaded and then regretted.
 *
 * THE GAP, STATED. A container that has already loaded on a public page
 * stays loaded through a client side navigation into /admin: unmounting a
 * next/script does not unload GTM. Nothing on the public site links to
 * /admin, so in practice it is always a fresh document load and the gate
 * holds. If an admin link is ever added to the site chrome, this stops
 * being true and the honest fix is a separate document boundary.
 *
 * CONSENT DEFAULTS ARE NOT GATED, deliberately. ConsentDefault is a plain
 * inline script, which only runs when the browser parses it in the initial
 * HTML. Render it conditionally and a client side navigation would inject a
 * script tag that never executes, which would leave a public page with the
 * container loading and no defaults ahead of it. It costs nothing on /admin
 * and it must never be late on a page that does measure.
 */
export function TagManagerGate() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <TagManager />;
}

export function TagManagerNoScriptGate() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <TagManagerNoScript />;
}
