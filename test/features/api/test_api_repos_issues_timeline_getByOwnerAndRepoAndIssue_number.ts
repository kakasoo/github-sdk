import api from "@kakasoo/github-sdk";
import { timeline_minus_issue_minus_events } from "@kakasoo/github-sdk/lib/structures/timeline_minus_issue_minus_events";
import typia from "typia";

export async function test_api_repos_issues_timeline_getByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: timeline_minus_issue_minus_events[] =
    await api.functional.repos.issues.timeline.getByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
