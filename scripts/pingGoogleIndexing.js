const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Path to Google Cloud Service Account credentials JSON file
const CREDENTIALS_PATH = path.join(__dirname, '../google_service_account.json');
const BASE_URL = 'https://hockeyworldcup2026schedule.com';

async function main() {
  console.log('--- STARTING GOOGLE INDEXING API PING CLIENT ---');

  // 1. Verify Service Account credentials exist
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(`Error: Google Service Account credentials file not found at:
${CREDENTIALS_PATH}

To set up the Indexing API:
1. Create a project in Google Cloud Console.
2. Enable "Web Search Indexing API" for the project.
3. Go to Credentials -> Create Credentials -> Service Account.
4. Generate a JSON Key for the Service Account and save it as "google_service_account.json" in your project root.
5. Add the Service Account email (e.g. your-account@your-project.iam.gserviceaccount.com) as an OWNER in Google Search Console for your website property.
`);
    process.exit(1);
  }

  // 2. Read credentials
  let credentials;
  try {
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  } catch (error) {
    console.error('Error: Failed to parse credentials JSON file.', error);
    process.exit(1);
  }

  // 3. Initialize Google Auth Client
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  console.log('Authorizing with Google APIs...');
  const authClient = await auth.getClient();
  console.log(`Authenticated as service account: ${credentials.client_email}`);

  // 4. Gather URLs to index
  // For safety, we prioritize newly published news articles and recent match previews
  const urls = [];

  // Add homepage & main landing pages
  urls.push(`${BASE_URL}/`);
  urls.push(`${BASE_URL}/matches`);
  urls.push(`${BASE_URL}/news`);
  urls.push(`${BASE_URL}/schedule`);

  // Dynamically load active news articles
  try {
    const newsData = require('../src/data/news.js').newsArticles;
    const now = new Date();
    // Only index published news
    const published = newsData.filter(art => new Date(art.date) <= now);
    published.forEach(art => {
      urls.push(`${BASE_URL}/news/${art.slug}`);
    });
  } catch (e) {
    console.log('Note: Could not parse news articles for dynamic indexing paths.');
  }

  // Dynamically load matches with active previews
  try {
    const { ALL_MATCHES } = require('../src/data/allMatches.js');
    
    // We only index matches that have preview templates
    // Match titles mapped to previews
    const getPreviewSlug = (teamA, teamB, gender) => {
      const tA = teamA.toLowerCase();
      const tB = teamB.toLowerCase();
      const g = gender.toLowerCase();
      if (((tA === "pakistan" && tB === "india") || (tA === "india" && tB === "pakistan")) && g === "men") return "india-vs-pakistan";
      if (((tA === "germany" && tB === "belgium") || (tA === "belgium" && tB === "germany")) && g === "men") return "germany-vs-belgium";
      if (((tA === "australia" && tB === "netherlands") || (tA === "netherlands" && tB === "australia")) && g === "women") return "netherlands-vs-australia-women";
      if (((tA === "india" && tB === "england") || (tA === "england" && tB === "india")) && g === "men") return "india-vs-england";
      if (((tA === "argentina" && tB === "netherlands") || (tA === "netherlands" && tB === "argentina")) && g === "men") return "netherlands-vs-argentina";
      if (((tA === "spain" && tB === "australia") || (tA === "australia" && tB === "spain")) && g === "men") return "australia-vs-spain";
      if (((tA === "belgium" && tB === "france") || (tA === "france" && tB === "belgium")) && g === "men") return "belgium-vs-france";
      if (((tA === "england" && tB === "pakistan") || (tA === "pakistan" && tB === "england")) && g === "men") return "england-vs-pakistan";
      if (((tA === "india" && tB === "england") || (tA === "england" && tB === "india")) && g === "women") return "india-vs-england-women";
      if (((tA === "germany" && tB === "netherlands") || (tA === "netherlands" && tB === "germany")) && g === "men") return "germany-vs-netherlands";
      if (((tA === "netherlands" && tB === "germany") || (tA === "germany" && tB === "netherlands")) && g === "women") return "netherlands-vs-germany-women";
      if (((tA === "australia" && tB === "argentina") || (tA === "argentina" && tB === "australia")) && g === "men") return "australia-vs-argentina";
      if (((tA === "belgium" && tB === "netherlands") || (tA === "netherlands" && tB === "belgium")) && g === "men") return "belgium-vs-netherlands";
      if (((tA === "india" && tB === "wales") || (tA === "wales" && tB === "india")) && g === "men") return "india-vs-wales";
      if (((tA === "pakistan" && tB === "wales") || (tA === "wales" && tB === "pakistan")) && g === "men") return "pakistan-vs-wales";
      return null;
    };

    ALL_MATCHES.forEach(match => {
      const slug = getPreviewSlug(match.teamA, match.teamB, match.gender);
      if (slug) {
        urls.push(`${BASE_URL}/matches/${slug}`);
      }
    });
  } catch (e) {
    console.log('Note: Could not parse matches for dynamic indexing paths.');
  }

  // Remove duplicate URLs
  const uniqueUrls = [...new Set(urls)];
  console.log(`Found ${uniqueUrls.length} total active URLs to notify Google Indexing API...`);

  // 5. Submit URLs sequentially to avoid hitting rate limits too fast
  const indexing = google.indexing({
    version: 'v3',
    auth: authClient
  });

  for (const url of uniqueUrls) {
    try {
      console.log(`Pinging Indexing API for: ${url}`);
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      console.log(`Success! Notification Status: ${response.data.urlNotificationMetadata?.latestUpdate?.notifyTime || 'Done'}`);
    } catch (error) {
      console.error(`Failed to submit URL: ${url}. Error:`, error.message);
    }
  }

  console.log('--- GOOGLE INDEXING API PING COMPLETED ---');
}

main().catch(err => {
  console.error('Unhandled fatal error inside Indexing main sequence:', err);
});
