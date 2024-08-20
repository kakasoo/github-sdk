import api from "@kakasoo/github-sdk";
import { actions_minus_cache_minus_usage_minus_by_minus_repository } from "@kakasoo/github-sdk/lib/structures/actions_minus_cache_minus_usage_minus_by_minus_repository";
import typia from "typia";

export async function test_api_repos_actions_cache_usage_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: actions_minus_cache_minus_usage_minus_by_minus_repository =
    await api.functional.repos.actions.cache.usage.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
