import api from "@kakasoo/github-sdk";
import { branch_minus_short } from "@kakasoo/github-sdk/lib/structures/branch_minus_short";
import typia from "typia";

export async function test_api_repos_commits_branches_where_head_getByOwnerAndRepoAndCommit_sha(
  connection: api.IConnection,
) {
  const output: branch_minus_short[] =
    await api.functional.repos.commits.branches_where_head.getByOwnerAndRepoAndCommit_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
