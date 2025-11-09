globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_PT9-lCXJ.mjs';
import { manifest } from './manifest_BRyxu9h9.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/share/store.astro.mjs');
const _page2 = () => import('./pages/api/share/_shareid_.astro.mjs');
const _page3 = () => import('./pages/draw/_id_.astro.mjs');
const _page4 = () => import('./pages/draw.astro.mjs');
const _page5 = () => import('./pages/share/_shareid_.astro.mjs');
const _page6 = () => import('./pages/share.astro.mjs');
const _page7 = () => import('./pages/vault.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/api/share/store.ts", _page1],
    ["src/pages/api/share/[shareId].ts", _page2],
    ["src/pages/draw/[id].astro", _page3],
    ["src/pages/draw/index.astro", _page4],
    ["src/pages/share/[shareId].astro", _page5],
    ["src/pages/share.astro", _page6],
    ["src/pages/vault.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
