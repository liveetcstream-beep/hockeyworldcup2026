const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'hockeyworldcup2026schedule.com';
const KEY = 'b9d40b78e2cb489bb0c99a5e12e2f694';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const BASE_URL = `https://${HOST}`;

async function main() {
  console.log('=== STARTING INDEXNOW SUBMISSION (BING, YANDEX, SEZNAM, NAVER) ===');

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

  // D. Match Previews
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

  // F. Dynamic News
  try {
    const newsData = require('../src/data/news.js').newsArticles;
    const now = new Date();
    const publishedNews = newsData.filter(art => new Date(art.date) <= now);
    urls.push(`${BASE_URL}/news`);
    publishedNews.forEach(art => {
      urls.push(`${BASE_URL}/news/${art.slug}`);
    });
  } catch (e) {
    console.log('Skipping news parse');
  }

  // G. Dynamic Players profiles
  try {
    const { players } = require('../src/data/players.js');
    urls.push(`${BASE_URL}/players`);
    players.forEach(p => {
      urls.push(`${BASE_URL}/players/${p.slug}`);
    });
  } catch (e) {
    console.log('Skipping players parse');
  }

  // H. Date pages
  try {
    const { matchDays } = require('../src/data/datepages.js');
    urls.push(`${BASE_URL}/schedule/date`);
    matchDays.forEach(day => {
      urls.push(`${BASE_URL}/schedule/date/${day.slug}`);
    });
  } catch (e) {
    console.log('Skipping datepages parse');
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

  const finalUrls = [...new Set(urls)];
  console.log(`Generated ${finalUrls.length} total URLs to submit to IndexNow...`);

  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: finalUrls
  });

  const endpoints = [
    { name: 'IndexNow Global (api.indexnow.org)', host: 'api.indexnow.org', path: '/indexnow' },
    { name: 'Bing (www.bing.com)', host: 'www.bing.com', path: '/indexnow' },
    { name: 'Yandex (yandex.com)', host: 'yandex.com', path: '/indexnow' }
  ];

  for (const ep of endpoints) {
    console.log(`\nSubmitting to ${ep.name}...`);
    try {
      const res = await sendPostRequest(ep.host, ep.path, payload);
      console.log(`Response Code from ${ep.name}: ${res.statusCode} (${res.statusCode === 200 ? 'OK - Submitted successfully' : res.statusCode === 202 ? 'Accepted - Key verification in progress/pending' : res.body || 'Received'})`);
    } catch (err) {
      console.error(`Failed to submit to ${ep.name}:`, err.message);
    }
  }

  console.log('\n=== INDEXNOW SUBMISSION FINISHED ===');
}

function sendPostRequest(host, path, data) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: host,
      port: 443,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body });
      });
    });

    req.on('error', (e) => reject(e));
    req.write(data);
    req.end();
  });
}

main().catch(console.error);
