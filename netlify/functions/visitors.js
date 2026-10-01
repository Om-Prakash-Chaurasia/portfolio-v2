import { getStore } from "@netlify/blobs";

export default async (req) => {
  const url = new URL(req.url);
  const action = url.searchParams.get("action") || "get";

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    const store = getStore("analytics");
    const rawVal = await store.get("unique_visitors");
    let count = rawVal ? parseInt(rawVal, 10) : 0;

    // Start with a modest baseline if empty (or 0)
    if (isNaN(count)) count = 0;

    if (action === "increment") {
      count += 1;
      await store.set("unique_visitors", count.toString());
    }

    return new Response(JSON.stringify({ count }), {
      headers: corsHeaders,
      status: 200,
    });
  } catch (error) {
    console.error("Netlify Blobs visitor count error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to read/write visitor count",
        message: error.message,
      }),
      { headers: corsHeaders, status: 500 },
    );
  }
};

export const config = {
  path: "/api/visitors",
};
