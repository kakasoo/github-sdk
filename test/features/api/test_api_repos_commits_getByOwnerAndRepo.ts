import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { commit } from "@ORGANIZATION/PROJECT-api/lib/structures/commit";
import { IApiReposCommits } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCommits";

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
