import api from "@kakasoo/github-sdk";
import { issue_minus_event } from "@kakasoo/github-sdk/lib/structures/issue_minus_event";
import typia, { tags } from "typia";

export async function test_api_repos_issues_events_getByOwnerAndRepoAndEvent_id(
  connection: api.IConnection,
) {
  const output: issue_minus_event =
    await api.functional.repos.issues.events.getByOwnerAndRepoAndEvent_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
