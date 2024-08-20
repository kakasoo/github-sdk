import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { git_minus_tree } from "@ORGANIZATION/PROJECT-api/lib/structures/git_minus_tree";
import { IApiReposGitTrees } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposGitTrees";

export async function test_api_repos_git_trees_getByOwnerAndRepoAndTree_sha(
  connection: api.IConnection,
) {
  const output: git_minus_tree =
    await api.functional.repos.git.trees.getByOwnerAndRepoAndTree_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposGitTrees.GetQuery>(),
    );
  typia.assert(output);
}
