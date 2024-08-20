import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { git_minus_ref } from "@kakasoo/github-sdk/lib/structures/git_minus_ref";
import typia from "typia";

export async function test_api_repos_git_refs_patchByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: git_minus_ref =
    await api.functional.repos.git.refs.patchByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
