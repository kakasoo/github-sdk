import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { label } from "@ORGANIZATION/PROJECT-api/lib/structures/label";

export async function test_api_repos_issues_labels_eraseByOwnerAndRepoAndIssue_numberAndName(
  connection: api.IConnection,
) {
  const output: label[] =
    await api.functional.repos.issues.labels.eraseByOwnerAndRepoAndIssue_numberAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
