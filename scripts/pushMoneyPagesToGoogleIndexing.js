const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const CREDENTIALS_PATH = path.join(__dirname, '../google_service_account.json');
const BASE_URL = 'https://hockeyworldcup2026schedule.com';

const MONEY_URLS = [
  // Tier 1: Core Live & High Traffic Hubs
  `${BASE_URL}`,
  `${BASE_URL}/live-scores`,
  `${BASE_URL}/schedule`,
  `${BASE_URL}/hockey-live-streaming`,
  `${BASE_URL}/points-table`,
  `${BASE_URL}/hockey-world-cup-2026-groups`,
  `${BASE_URL}/pool-a`,
  `${BASE_URL}/pool-b`,
  `${BASE_URL}/pool-c`,
  `${BASE_URL}/pool-d`,
  `${BASE_URL}/results`,
  `${BASE_URL}/womens-tournament`,

  // Tier 2: Active Match Dates
  `${BASE_URL}/schedule/date`,
  `${BASE_URL}/schedule/date/august-15-matches`,
  `${BASE_URL}/schedule/date/august-16-matches`,
  `${BASE_URL}/schedule/date/august-17-matches`,
  `${BASE_URL}/schedule/date/august-18-matches`,
  `${BASE_URL}/schedule/date/august-19-matches`,
  `${BASE_URL}/schedule/date/august-20-matches`,

  // Tier 3: All 20 Qualified Team Schedules
  `${BASE_URL}/hockey-world-cup-2026-schedule-india`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-pakistan`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-germany`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-belgium`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-netherlands`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-australia`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-england`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-spain`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-argentina`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-france`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-malaysia`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-new-zealand`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-ireland`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-chile`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-china`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-japan`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-scotland`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-south-africa`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-usa`,
  `${BASE_URL}/hockey-world-cup-2026-schedule-wales`,

  // Tier 4: Marquee Match Pages
  `${BASE_URL}/matches/india-vs-pakistan`,
  `${BASE_URL}/matches/germany-vs-belgium`,
  `${BASE_URL}/matches/india-vs-england`,
  `${BASE_URL}/matches/netherlands-vs-australia-women`,
  `${BASE_URL}/matches/belgium-vs-france`,
  `${BASE_URL}/matches/england-vs-pakistan`,
  `${BASE_URL}/matches/australia-vs-spain`,
  `${BASE_URL}/matches/india-vs-wales`,
  `${BASE_URL}/matches/pakistan-vs-wales`,
  `${BASE_URL}/matches/netherlands-vs-argentina`,
  `${BASE_URL}/matches/germany-vs-netherlands`,
  `${BASE_URL}/matches/belgium-vs-netherlands`,

  // Tier 5: Team Results
  `${BASE_URL}/results/india`,
  `${BASE_URL}/results/pakistan`,
  `${BASE_URL}/results/belgium`,
  `${BASE_URL}/results/germany`,
  `${BASE_URL}/results/netherlands`,
  `${BASE_URL}/results/australia`,
  `${BASE_URL}/results/england`,
  `${BASE_URL}/results/spain`,

  // News Hub
  `${BASE_URL}/news`
];

async function pushToGoogleIndexing() {
  console.log(`\n🚀 STARTING GOOGLE INDEXING API PUSH FOR ${MONEY_URLS.length} MONEY PAGES...`);

  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(`❌ Credentials not found at: ${CREDENTIALS_PATH}`);
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  console.log(`🔑 Authenticated as Service Account: ${credentials.client_email}\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < MONEY_URLS.length; i++) {
    const url = MONEY_URLS[i];
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });

      if (res.status === 200) {
        successCount++;
        console.log(`[${i + 1}/${MONEY_URLS.length}] ✅ Pushed: ${url}`);
      } else {
        console.log(`[${i + 1}/${MONEY_URLS.length}] ⚠️ Status ${res.status}: ${url}`);
      }
    } catch (err) {
      failCount++;
      console.error(`[${i + 1}/${MONEY_URLS.length}] ❌ Error pushing ${url}:`, err.message);
    }

    // Rate-limiting delay 150ms between requests
    await new Promise((resolve) => setTimeout(resolve, 150));
  }

  console.log(`\n========================================`);
  console.log(`🏁 GOOGLE INDEXING PUSH COMPLETE!`);
  console.log(`✅ Successfully Pushed: ${successCount} URLs`);
  console.log(`❌ Failed: ${failCount} URLs`);
  console.log(`========================================\n`);
}

pushToGoogleIndexing();
