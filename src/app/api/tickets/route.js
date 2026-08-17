import { fetchFIHTicketData } from "../../../lib/fihTicketScraper.js";

export async function GET(request) {
  try {
    const data = await fetchFIHTicketData();
    return Response.json(data, {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=300",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch ticket data", details: error.message },
      { status: 500 }
    );
  }
}
