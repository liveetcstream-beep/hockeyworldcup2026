const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Path to Google Cloud Service Account credentials JSON file
const CREDENTIALS_PATH = path.join(__dirname, '../google_service_account.json');
const BASE_URL = 'https://hockeyworldcup2026schedule.com';

async function main() {
  console.log('--- STARTING BULK SITEMAP URL INDEXING SUBMISSION ---');

  // 1. Verify Service Account credentials exist
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(`Error: Credentials not found at: ${CREDENTIALS_PATH}`);
    process.exit(1);
  }

  // 2. Read credentials
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

  // 3. Initialize Google Auth Client
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  console.log(`Authenticated successfully as: ${credentials.client_email}`);

  // 4. Replicate exact sitemap list logic in Node/CommonJS
  const urls = [];

  // A. Static Tier 1, 2, 3 pages
  const staticRoutes = [
    "",
    "/schedule",
    "/live-scores",
    "/points-table",
    "/h2h",
    "/teams",
    "/past-results",
    "/hockey-live-streaming",
    "/venues",
    "/format",
    "/history",
    "/tickets",
    "/prize-money",
    "/fantasy-predictions",
    "/womens-tournament",
    "/authors",
    "/hockey-world-cup-2026-groups"
  ];

  // B. Team schedule landing pages
  const countries = [
    "india", "pakistan", "germany", "belgium", "australia", "netherlands", "spain", "england",
    "argentina", "new-zealand", "japan", "malaysia", "france", "ireland", "south-africa", "wales",
    "chile", "usa", "scotland", "china"
  ];
  countries.forEach(c => {
    staticRoutes.push(`/hockey-world-cup-2026-schedule-${c}`);
  });

  // C. Pool Standings & Venues
  staticRoutes.push("/pool-a", "/pool-b", "/pool-c", "/pool-d");
  staticRoutes.push("/venues/wagener-stadium-guide", "/venues/belfius-arena-guide");

  // D. Match Previews (Static blockbusters)
  staticRoutes.push("/matches");
  const matches = [
    "australia-vs-argentina", "australia-vs-spain", "belgium-vs-france", "belgium-vs-netherlands",
    "england-vs-pakistan", "germany-vs-belgium", "germany-vs-netherlands", "india-vs-england",
    "india-vs-england-women", "india-vs-pakistan", "india-vs-wales", "pakistan-vs-wales",
    "netherlands-vs-argentina", "netherlands-vs-australia-women", "netherlands-vs-germany-women"
  ];
  matches.forEach(m => {
    staticRoutes.push(`/matches/${m}`);
  });

  // E. Knockout pages
  staticRoutes.push("/knockout/quarter-finals", "/knockout/semi-finals", "/knockout/final");
  staticRoutes.push("/privacy-policy", "/terms-of-use");

  // Add staticRoutes to URLs
  staticRoutes.forEach(r => {
    urls.push(`${BASE_URL}${r}`);
  });

  // F. Dynamic News (Only published ones)
  try {
    const newsData = require('../src/data/news.js').newsArticles;
    const now = new Date();
    const publishedNews = newsData.filter(art => new Date(art.date) <= now);
    urls.push(`${BASE_URL}/news`);
    publishedNews.forEach(art => {
      urls.push(`${BASE_URL}/news/${art.slug}`);
    });
  } catch (e) {
    console.log('Skipping news parse in sitemap generator');
  }

  // G. Dynamic Players profiles
  try {
    const { players } = require('../src/data/players.js');
    urls.push(`${BASE_URL}/players`);
    players.forEach(p => {
      urls.push(`${BASE_URL}/players/${p.slug}`);
    });
  } catch (e) {
    console.log('Skipping players parse in sitemap generator');
  }

  // H. Date pages
  try {
    const { matchDays } = require('../src/data/datepages.js');
    urls.push(`${BASE_URL}/schedule/date`);
    matchDays.forEach(day => {
      urls.push(`${BASE_URL}/schedule/date/${day.slug}`);
    });
  } catch (e) {
    console.log('Skipping datepages parse in sitemap generator');
  }

  // I. Team Results pages
  const resultTeams = [
    "india", "pakistan", "belgium", "netherlands", "germany",
    "australia", "argentina", "england", "spain", "france",
    "malaysia", "ireland", "wales", "south-africa", "new-zealand", "chile"
  ];
  urls.push(`${BASE_URL}/results`);
  resultTeams.forEach((team) => {
    urls.push(`${BASE_URL}/results/${team}`);
  });

  // Clean and filter duplicates
  const finalUrls = [...new Set(urls)];
  console.log(`Generated ${finalUrls.length} total URLs to request indexing...`);

  // 5. Submit all URLs sequentially
  const indexing = google.indexing({
    version: 'v3',
    auth: authClient
  });

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < finalUrls.length; i++) {
    const url = finalUrls[i];
    console.log(`[${i + 1}/${finalUrls.length}] Submitting URL: ${url}`);
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      successCount++;
    } catch (err) {
      console.error(`Failed: ${url}. Error: ${err.message}`);
      failCount++;
    }
    // Small sleep (100ms) to ensure we do not hit rate limit burst issues
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n--- INDEXING COMPLETE ---');
  console.log(`Total URLs: ${finalUrls.length}`);
  console.log(`Successfully indexed: ${successCount}`);
  console.log(`Failed: ${failCount}`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
});
