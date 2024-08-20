import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_issues_lock_eraseByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.issues.lock.eraseByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
