import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { label } from "@ORGANIZATION/PROJECT-api/lib/structures/label";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_issues_labels_postByOwnerAndRepoAndIssue_number(
  connection: api.IConnection,
) {
  const output: label[] =
    await api.functional.repos.issues.labels.postByOwnerAndRepoAndIssue_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}