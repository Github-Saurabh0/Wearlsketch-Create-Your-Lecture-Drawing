globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_C0Z3OK3F.mjs';
import { $ as $$Layout } from '../chunks/Layout_BACKTPeK.mjs';
export { renderers } from '../renderers.mjs';

const $$Vault = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "VaultPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/page-components/vault-page", "client:component-export": "default" })} ${renderComponent($$result2, "Toaster", null, { "richColors": true, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })} ` })}`;
}, "E:/Wearl-sketch/Wearlsketch-Create-Your-Lecture-Drawing/src/pages/vault.astro", void 0);

const $$file = "E:/Wearl-sketch/Wearlsketch-Create-Your-Lecture-Drawing/src/pages/vault.astro";
const $$url = "/vault";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Vault,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
