import api from "@kakasoo/github-sdk";
import { commit_minus_comparison } from "@kakasoo/github-sdk/lib/structures/commit_minus_comparison";
import typia from "typia";

export async function test_api_repos_compare_getByOwnerAndRepoAndBasehead(
  connection: api.IConnection,
) {
  const output: commit_minus_comparison =
    await api.functional.repos.compare.getByOwnerAndRepoAndBasehead(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
