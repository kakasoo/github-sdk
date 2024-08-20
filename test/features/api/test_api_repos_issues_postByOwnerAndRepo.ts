import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue } from "@ORGANIZATION/PROJECT-api/lib/structures/issue";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_issues_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: issue = await api.functional.repos.issues.postByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
