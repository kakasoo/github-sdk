import api from "@kakasoo/github-sdk";
import { IApiReposCommits } from "@kakasoo/github-sdk/lib/structures/IApiReposCommits";
import { commit } from "@kakasoo/github-sdk/lib/structures/commit";
import typia from "typia";

export async function test_api_repos_commits_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: commit[] = await api.functional.repos.commits.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<IApiReposCommits.GetQuery>(),
  );
  typia.assert(output);
}
