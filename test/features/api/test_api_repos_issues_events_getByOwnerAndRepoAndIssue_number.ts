import api from "@kakasoo/github-sdk";
import { issue_minus_event_minus_for_minus_issue } from "@kakasoo/github-sdk/lib/structures/issue_minus_event_minus_for_minus_issue";
import typia from "typia";

export async function test_api_repos_issues_events_getByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: issue_minus_event_minus_for_minus_issue[] =
    await api.functional.repos.issues.events.getByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
