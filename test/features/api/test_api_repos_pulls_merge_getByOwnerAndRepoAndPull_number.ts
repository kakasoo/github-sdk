import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_pulls_merge_getByOwnerAndRepoAndPull_number(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.pulls.merge.getByOwnerAndRepoAndPull_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
