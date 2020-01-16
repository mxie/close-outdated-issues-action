const core = require('@actions/core');
const github = require('@actions/github');

try {
  const projectId = core.getInput('project-id');
  console.log(`Project ID: ${projectId}`);

  const srcColumnId = core.getInput('src-column-id');
  console.log(`Source: ${srcColumnId}`);

  const destColumnId = core.getInput('dest-column-id');
  console.log(`Destination: ${destColumnId}`);
} catch (error) {
  core.setFailed(error.message)
}
