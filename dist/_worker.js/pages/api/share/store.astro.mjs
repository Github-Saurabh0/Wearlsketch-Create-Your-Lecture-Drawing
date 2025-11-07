globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, locals }) => {
  try {
    const KV = locals.runtime?.env?.Wearlsketch_SHARES;
    if (!KV) {
      return new Response(
        JSON.stringify({ error: "KV storage not available" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const shareData = await request.json();
    if (!shareData.name || !shareData.data || !shareData.timestamp) {
      return new Response(JSON.stringify({ error: "Invalid share data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const dataSize = JSON.stringify(shareData).length;
    const maxSize = 20 * 1024 * 1024;
    if (dataSize > maxSize) {
      return new Response(
        JSON.stringify({
          error: "Drawing too large to share",
          message: "Your drawing exceeds the 20MB sharing limit. Try reducing the complexity or export as a file instead.",
          size: dataSize,
          maxSize
        }),
        {
          status: 413,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const shareId = generateShareId();
    await KV.put(shareId, JSON.stringify(shareData), {
      expirationTtl: 2592e3
      // 30 days
    });
    return new Response(
      JSON.stringify({
        success: true,
        shareId,
        shareUrl: `${new URL(request.url).origin}/share/${shareId}`,
        expiresAt: new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1e3
        ).toISOString()
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error storing share data:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to store share data",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
function generateShareId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const randomArray = new Uint8Array(12);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(randomArray);
    for (let i = 0; i < randomArray.length; i++) {
      result += chars[randomArray[i] % chars.length];
    }
  } else {
    for (let i = 0; i < 12; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return result;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
