const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (f.endsWith('.js') || f.endsWith('.md')) {
      callback(dirPath);
    }
  });
}

const map = {
  'ðŸ ’': '🏒',
  'ðŸ‡®ðŸ‡³': '🇮🇳',
  'ðŸ‡µðŸ‡°': '🇵🇰',
  'ðŸ‡§ðŸ‡ª': '🇧🇪',
  'ðŸ‡©ðŸ‡ª': '🇩🇪',
  'ðŸ‡³ðŸ‡±': '🇳🇱',
  'ðŸ‡¦ðŸ‡º': '🇦🇺',
  'ðŸ ´ó  §ó  ¢ó  ¥ó  ®ó  §ó  ¿': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'ðŸ‡¦ðŸ‡·': '🇦🇷',
  'ðŸ“…': '📅',
  'ðŸ †': '🏆',
  'ðŸŒŽ': '🌎',
  'ðŸ‡«ðŸ‡·': '🇫🇷',
  'ðŸ‡²ðŸ‡¾': '🇲🇾',
  'âœ ï¸ ': '✔️',
  'ðŸ“ ': '📍',
  'â€“': '–',
  'Ã—': '×',
  'ðŸ‡ºðŸ‡¸': '🇺🇸',
  'ðŸ‡°ðŸ‡·': '🇰🇷',
  'Â·': '·',
  'ðŸ‡¯ðŸ‡µ': '🇯🇵',
  'ðŸ‡¨ðŸ‡±': '🇨🇱',
  'ðŸ‡³ðŸ‡¿': '🇳🇿',
  'ðŸ ´ó  §ó  ¢ó  ·ó  ¬ó  ³ó  ¿': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  'ðŸ‡®ðŸ‡ª': '🇮🇪',
  'ðŸ‡ªðŸ‡¸': '🇪🇸',
  'ðŸ‡¿ðŸ‡¦': '🇿🇦',
  'ðŸ ´ó  §ó  ¢ó  ³ó  £ó  ´ó  ¿': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'â€™': "'",
  'â€œ': '"',
  'â€': '"',
  'Â': ' '
};

walkDir(srcDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const [bad, good] of Object.entries(map)) {
    if (content.includes(bad)) {
      content = content.split(bad).join(good);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', filePath);
  }
});
