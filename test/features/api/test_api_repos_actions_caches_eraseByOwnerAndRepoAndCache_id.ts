import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_actions_caches_eraseByOwnerAndRepoAndCache_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.caches.eraseByOwnerAndRepoAndCache_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
