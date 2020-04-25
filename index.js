const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const token = core.getInput("token");
  const octokit = new github.GitHub(token);
  const ghContext = github.context;

  const { data: openIssues } = await octokit.issues.listForRepo({
    ...ghContext.repo,
    state: "open",
  });

  const datePattern = /(\d\d).(\d\d).\d{2,4}/;
  const today = new Date();

  console.log(`Found ${openIssues.length} open issues.`);

  let issuesClosed = 0;

  for (const issue of openIssues) {
    const issueNumber = issue.number;
    const issueTitle = issue.title;

    const results = datePattern.exec(issueTitle);

    if (results !== null) {
      const [month, day] = results.slice(1);

      const issueDate = new Date(2020, month - 1, day);

      if (issueDate < today) {
        octokit.issues.update({
          ...ghContext.repo,
          issue_number: issueNumber,
          state: "closed",
        });
        
        console.log(`Closed #${issue.number}.`);

        issuesClosed++;
      }
    }
  }

  console.log(`Closed ${issuesClosed} issues.`);
}

run();
