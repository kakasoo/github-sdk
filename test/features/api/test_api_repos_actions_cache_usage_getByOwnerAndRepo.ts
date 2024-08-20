import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_cache_minus_usage_minus_by_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_cache_minus_usage_minus_by_minus_repository";

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
