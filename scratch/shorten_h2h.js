const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'h2h', 'page.js');
let content = fs.readFileSync(filePath, 'utf8');

// Country translations for Result (Score) and Outcome
const replacements = [
  // Results
  { search: /India (\d+) – (\d+) Pakistan/g, replace: 'IND $1 – $2 PAK' },
  { search: /Germany (\d+) – (\d+) Netherlands/g, replace: 'GER $1 – $2 NED' },
  { search: /Netherlands (\d+) – (\d+) Germany/g, replace: 'NED $1 – $2 GER' },
  { search: /Belgium (\d+) – (\d+) Australia/g, replace: 'BEL $1 – $2 AUS' },
  { search: /Australia (\d+) – (\d+) Belgium/g, replace: 'AUS $1 – $2 BEL' },
  { search: /Netherlands (\d+) – (\d+) Argentina/g, replace: 'NED $1 – $2 ARG' },

  // Special cases
  { search: /India 0 – 0 Pakistan \(Abandoned\)/g, replace: 'IND 0 – 0 PAK (Abd)' },

  // Outcomes
  { search: /🇮🇳 India Win/g, replace: '🇮🇳 IND Win' },
  { search: /🇵🇰 Pakistan Win/g, replace: '🇵🇰 PAK Win' },
  { search: /🇳🇱 Netherlands Win/g, replace: '🇳🇱 NED Win' },
  { search: /🇩🇪 Germany Win/g, replace: '🇩🇪 GER Win' },
  { search: /🇧🇪 Belgium Win/g, replace: '🇧🇪 BEL Win' },
  { search: /🇦🇺 Australia Win/g, replace: '🇦🇺 AUS Win' },
  { search: /🇦🇷 Argentina Win/g, replace: '🇦🇷 ARG Win' }
];

replacements.forEach(({ search, replace }) => {
  content = content.replace(search, replace);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully shortened all H2H table results and outcomes!');
