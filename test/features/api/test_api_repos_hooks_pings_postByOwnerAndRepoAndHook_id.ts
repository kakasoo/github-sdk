import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_hooks_pings_postByOwnerAndRepoAndHook_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.hooks.pings.postByOwnerAndRepoAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
