import api from "@kakasoo/github-sdk";
import { actions_minus_cache_minus_list } from "@kakasoo/github-sdk/lib/structures/actions_minus_cache_minus_list";
import typia from "typia";

export async function test_api_repos_actions_caches_eraseByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: actions_minus_cache_minus_list =
    await api.functional.repos.actions.caches.eraseByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
