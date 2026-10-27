import Script from "next/script";

/**
 * The 2 Google tags the live site loads, mirrored here so staging measures
 * the same way production does.
 *
 *   GTM-PR3DRB45       the Tag Manager container
 *   AW-17856876156     the Google Ads tag, loaded directly as gtag.js
 *
 * Both are loaded independently, which is how the live site does it. The Ads
 * tag is NOT left to fire from inside the container: duplicating it in both
 * places is what double counts conversions, so whichever side owns it has to
 * own it alone, and the live site's choice is the direct tag.
 *
 * afterInteractive, not beforeInteractive: neither tag renders anything, and
 * the hero is the LCP element on most pages, which SEO Guidelines 10.2 gates
 * at 2.5s. Measurement waits for the page, not the other way round.
 *
 * THE PHONE NUMBER IS NOT THEIRS TO CHANGE. If a CallRail swap arrives
 * through the container it may rewrite the visible number in the footer, and
 * that is the point of it. It must not reach the telephone field in the
 * ProfessionalService schema, which has to keep stating the real line. See
 * the note on that field in components/seo/json-ld.tsx.
 */
export function TagManager() {
  return (
    <>
      {/* Tag Manager container. */}
      <Script id="gtm-container" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR3DRB45');`}
      </Script>

      {/* Google Ads, the same direct gtag.js the live site loads. */}
      <Script
        id="gtag-ads-src"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17856876156"
      />
      <Script id="gtag-ads-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17856876156');`}
      </Script>
    </>
  );
}

/**
 * The container's no-JavaScript fallback. Belongs immediately inside body,
 * which is why it is separate from the scripts above.
 */
export function TagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PR3DRB45"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
