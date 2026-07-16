const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/schedule/ScheduleClient.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find the start of ALL_MATCHES and the end of WARMUP_MATCHES
const startIndex = content.indexOf('const ALL_MATCHES = [');
const endIndex = content.indexOf('];', content.indexOf('const WARMUP_MATCHES = ['));

if (startIndex !== -1 && endIndex !== -1) {
  // Replace the entire block with the import
  const before = content.slice(0, startIndex);
  const after = content.slice(endIndex + 2); // +2 for '];'
  
  content = before + 'import { ALL_MATCHES, WARMUP_MATCHES } from "../../data/allMatches";' + after;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully refactored ScheduleClient.js!');
} else {
  console.error('Could not find matches arrays in ScheduleClient.js');
}
