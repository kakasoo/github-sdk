import api from "@kakasoo/github-sdk";
import { IApiReposIssues } from "@kakasoo/github-sdk/lib/structures/IApiReposIssues";
import { issue } from "@kakasoo/github-sdk/lib/structures/issue";
import typia from "typia";

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
