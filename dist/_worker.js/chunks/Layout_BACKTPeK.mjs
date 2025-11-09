globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_C0Z3OK3F.mjs';
/* empty css                        */

const $$Astro = createAstro("https://sketch.wearl.co.in");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  let pageTitle = Astro2.props.pageTitle || "Wearlsketch";
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/Wearl-sketch/Wearlsketch-Create-Your-Lecture-Drawing/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
