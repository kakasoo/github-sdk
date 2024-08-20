import api from "@kakasoo/github-sdk";
import { label } from "@kakasoo/github-sdk/lib/structures/label";
import typia from "typia";

export async function test_api_repos_issues_labels_getByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: label[] =
    await api.functional.repos.issues.labels.getByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
