/**
 * Google Consent Mode v2 defaults, set before any tag can fire.
 *
 * WHY IT HAS TO BE FIRST. Consent Mode only works if the default state is on
 * the dataLayer before the container or gtag.js reads it. Set it afterwards
 * and the tags have already decided how to behave, which is the failure mode
 * that looks like it works: the signals are present, they just arrived late.
 * It is a plain inline script rather than next/script, so it executes while
 * the document is being parsed. The 2 tags are next/script afterInteractive
 * and are injected once hydration starts, so this is already on the
 * dataLayer by the time either can read it.
 *
 * THESE ARE SPENCER'S DEFAULTS, read from spencerairconditioning.com rather
 * than written from the spec: everything denied with no region split,
 * personalization_storage included, functionality and security granted, and
 * wait_for_update at 500ms. Spencer sets no ads_data_redaction or
 * url_passthrough, so neither is set here; gtag redacts ad identifiers on
 * its own while ad_storage is denied.
 *
 * WHAT SPENCER HAS THAT THIS SITE DOES NOT. Spencer pairs these defaults
 * with a consent banner that calls gtag('consent','update', ...) once a
 * visitor chooses. This site has no banner, so nothing ever sends that
 * update and every signal stays denied for everyone, not only in the EEA.
 * Measurement then runs on cookieless pings and modelling rather than on
 * cookies.
 *
 * That is deliberate and correct as a default, but it is not the same thing
 * as the live site's measurement, and it is the reason a banner is the next
 * piece of work rather than an optional extra. Raised, not resolved here.
 */
export function ConsentDefault() {
  const defaults = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  personalization_storage:'denied',
  functionality_storage:'granted',
  security_storage:'granted',
  wait_for_update:500
});`;

  return <script id="consent-default" dangerouslySetInnerHTML={{ __html: defaults }} />;
}
