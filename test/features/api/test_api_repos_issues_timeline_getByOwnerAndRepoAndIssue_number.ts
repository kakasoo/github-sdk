import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { timeline_minus_issue_minus_events } from "@ORGANIZATION/PROJECT-api/lib/structures/timeline_minus_issue_minus_events";

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
