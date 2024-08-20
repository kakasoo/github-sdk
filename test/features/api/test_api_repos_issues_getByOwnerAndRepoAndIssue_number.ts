import api from "@kakasoo/github-sdk";
import { issue } from "@kakasoo/github-sdk/lib/structures/issue";
import typia from "typia";

export async function test_api_repos_issues_getByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: issue =
    await api.functional.repos.issues.getByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
