import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { git_minus_tree } from "@kakasoo/github-sdk/lib/structures/git_minus_tree";
import typia from "typia";

export async function test_api_repos_git_trees_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: git_minus_tree =
    await api.functional.repos.git.trees.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
