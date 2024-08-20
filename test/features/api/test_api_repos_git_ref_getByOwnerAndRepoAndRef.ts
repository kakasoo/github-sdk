import api from "@kakasoo/github-sdk";
import { git_minus_ref } from "@kakasoo/github-sdk/lib/structures/git_minus_ref";
import typia from "typia";

export async function test_api_repos_git_ref_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output: git_minus_ref =
    await api.functional.repos.git.ref.getByOwnerAndRepoAndRef(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
