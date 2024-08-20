import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_issues_reactions_eraseByOwnerAndRepoAndIssue_numberAndReaction_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.issues.reactions.eraseByOwnerAndRepoAndIssue_numberAndReaction_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
