import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue } from "@ORGANIZATION/PROJECT-api/lib/structures/issue";
import { IApiReposIssues } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposIssues";

export async function test_api_repos_issues_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: issue[] = await api.functional.repos.issues.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<IApiReposIssues.GetQuery>(),
  );
  typia.assert(output);
}
