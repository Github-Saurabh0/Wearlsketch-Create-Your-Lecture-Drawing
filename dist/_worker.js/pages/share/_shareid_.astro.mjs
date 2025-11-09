globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_C0Z3OK3F.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BACKTPeK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sketch.wearl.co.in");
const $$shareId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$shareId;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${Astro2.params.shareId && renderTemplate`${renderComponent($$result2, "ShareByIdPage", null, { "client:only": "react", "shareId": Astro2.params.shareId, "client:component-hydration": "only", "client:component-path": "@/page-components/share-by-id-page", "client:component-export": "default" })}`}${renderComponent($$result2, "Toaster", null, { "richColors": true, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })} ` })}`;
}, "E:/Wearl-sketch/Wearlsketch-Create-Your-Lecture-Drawing/src/pages/share/[shareId].astro", void 0);

const $$file = "E:/Wearl-sketch/Wearlsketch-Create-Your-Lecture-Drawing/src/pages/share/[shareId].astro";
const $$url = "/share/[shareId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$shareId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
