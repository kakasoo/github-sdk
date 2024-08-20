import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_hooks_deliveries_attempts_postByOwnerAndRepoAndHook_idAndDelivery_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.hooks.deliveries.attempts.postByOwnerAndRepoAndHook_idAndDelivery_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
