import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue_minus_event } from "@ORGANIZATION/PROJECT-api/lib/structures/issue_minus_event";

export async function test_api_repos_issues_events_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: issue_minus_event[] =
    await api.functional.repos.issues.events.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
