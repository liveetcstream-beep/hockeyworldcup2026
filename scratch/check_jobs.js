const fs = require('fs');

fetch('https://api.github.com/repos/liveetcstream-beep/hockeyworldcup2026/actions/runs', {
  headers: { 'User-Agent': 'node' }
})
.then(res => res.json())
.then(data => {
  if (data.workflow_runs && data.workflow_runs.length > 0) {
    const latestRun = data.workflow_runs[0];
    console.log(`Fetching jobs for Run ID: ${latestRun.id}...`);
    
    fetch(`https://api.github.com/repos/liveetcstream-beep/hockeyworldcup2026/actions/runs/${latestRun.id}/jobs`, {
      headers: { 'User-Agent': 'node' }
    })
    .then(res => res.json())
    .then(jobsData => {
      console.log(JSON.stringify(jobsData, null, 2));
    });
  }
})
.catch(err => console.error(err));
