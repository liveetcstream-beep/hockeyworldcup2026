const fs = require('fs');

fetch('https://api.github.com/repos/liveetcstream-beep/hockeyworldcup2026/actions/runs', {
  headers: { 'User-Agent': 'node' }
})
.then(res => res.json())
.then(data => {
  if (data.workflow_runs) {
    console.log('Total runs:', data.workflow_runs.length);
    data.workflow_runs.slice(0, 5).forEach(run => {
      console.log(`- Run #${run.run_number} (${run.name}): status=${run.status}, conclusion=${run.conclusion}, created_at=${run.created_at}`);
    });
  } else {
    console.log('No runs found or repository is private:', data.message);
  }
})
.catch(err => console.error(err));
