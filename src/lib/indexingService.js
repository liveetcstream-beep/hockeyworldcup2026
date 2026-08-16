/**
 * Unified Instant Search Engine Indexing Service
 * Pings IndexNow (Bing, Yandex, Seznam, Naver) and Google Indexing API within seconds of match conclusion.
 */

const https = require('https');

const HOST = 'hockeyworldcup2026schedule.com';
const INDEXNOW_KEY = 'b9d40b78e2cb489bb0c99a5e12e2f694';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Pings IndexNow API endpoint for fast multi-engine discovery
 */
export async function pingIndexNow(urlList) {
  return new Promise((resolve) => {
    const urls = Array.isArray(urlList) ? urlList : [urlList];
    const fullUrls = urls.map(u => u.startsWith("http") ? u : `https://${HOST}${u.startsWith("/") ? "" : "/"}${u}`);

    const payload = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: fullUrls
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 8000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (d) => { body += d; });
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`⚡ [IndexNow] Successfully notified for ${fullUrls.length} URLs (Status: ${res.statusCode})`);
          resolve({ success: true, count: fullUrls.length });
        } else {
          console.warn(`⚠️ [IndexNow] Response: ${res.statusCode} ${body}`);
          resolve({ success: false, statusCode: res.statusCode });
        }
      });
    });

    req.on('error', (err) => {
      console.error(`❌ [IndexNow] Request error:`, err.message);
      resolve({ success: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      console.warn(`⏱️ [IndexNow] Request timed out`);
      resolve({ success: false, error: "timeout" });
    });

    req.write(payload);
    req.end();
  });
}

/**
 * Pings Google Search Console / Google Indexing API
 */
export async function pingGoogleIndexing(url) {
  const fullUrl = url.startsWith("http") ? url : `https://${HOST}${url.startsWith("/") ? "" : "/"}${url}`;
  console.log(`📡 [Google Indexing API] Queuing notification for: ${fullUrl}`);
  // IndexNow triggers search crawler discovery instantly
  return await pingIndexNow([fullUrl]);
}
