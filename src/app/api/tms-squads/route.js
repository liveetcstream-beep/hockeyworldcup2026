import { getOfficialTMSSquad } from "../../../lib/fihTmsSquadScraper";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const team = searchParams.get("team") || "India";

  try {
    const squadData = await getOfficialTMSSquad(team);
    return Response.json(squadData, {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=300",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch TMS squad data", details: error.message },
      { status: 500 }
    );
  }
}
