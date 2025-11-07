globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_C0Z3OK3F.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BACKTPeK.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DrawByIdPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/page-components/draw-pages/draw-by-id", "client:component-export": "default" })} ${renderComponent($$result2, "Toaster", null, { "richColors": true, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })} ` })}`;
}, "E:/Wearl-sketch/Wearlsketch-Create-Your-Lecture-Drawing/src/pages/draw/[id].astro", void 0);

const $$file = "E:/Wearl-sketch/Wearlsketch-Create-Your-Lecture-Drawing/src/pages/draw/[id].astro";
const $$url = "/draw/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
