const fs = require('fs');

fetch('https://api.github.com/repos/liveetcstream-beep/hockeyworldcup2026/actions/jobs/88153119602/logs', {
  headers: { 'User-Agent': 'node' }
})
.then(res => res.text())
.then(text => {
  console.log(text.slice(0, 1000));
})
.catch(err => console.error(err));
