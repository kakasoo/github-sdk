import api from "@kakasoo/github-sdk";
import { IApiReposGitTrees } from "@kakasoo/github-sdk/lib/structures/IApiReposGitTrees";
import { git_minus_tree } from "@kakasoo/github-sdk/lib/structures/git_minus_tree";
import typia from "typia";

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
