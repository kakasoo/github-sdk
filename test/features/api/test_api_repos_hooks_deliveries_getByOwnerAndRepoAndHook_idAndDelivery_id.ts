import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook_minus_delivery } from "@ORGANIZATION/PROJECT-api/lib/structures/hook_minus_delivery";

export async function test_api_repos_hooks_deliveries_getByOwnerAndRepoAndHook_idAndDelivery_id(
  connection: api.IConnection,
) {
  const output: hook_minus_delivery =
    await api.functional.repos.hooks.deliveries.getByOwnerAndRepoAndHook_idAndDelivery_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
