import { executeFreshnessSync } from "../../../lib/freshnessAutoSyncEngine.js";

export async function GET(request) {
  try {
    const result = await executeFreshnessSync();
    return Response.json(result, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to execute freshness sync", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const result = await executeFreshnessSync();
    return Response.json(result, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to force freshness sync", details: error.message },
      { status: 500 }
    );
  }
}
