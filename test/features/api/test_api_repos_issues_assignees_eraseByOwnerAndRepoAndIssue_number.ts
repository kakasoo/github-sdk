import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { issue } from "@kakasoo/github-sdk/lib/structures/issue";
import typia from "typia";

export async function test_api_repos_issues_assignees_eraseByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: issue =
    await api.functional.repos.issues.assignees.eraseByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
