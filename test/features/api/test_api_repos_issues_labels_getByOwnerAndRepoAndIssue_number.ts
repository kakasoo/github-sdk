import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { label } from "@ORGANIZATION/PROJECT-api/lib/structures/label";

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
