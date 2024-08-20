import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook_minus_delivery_minus_item } from "@ORGANIZATION/PROJECT-api/lib/structures/hook_minus_delivery_minus_item";
import { IApiReposHooksDeliveries } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposHooksDeliveries";

export async function test_api_repos_hooks_deliveries_getByOwnerAndRepoAndHook_id(
  connection: api.IConnection,
) {
  const output: hook_minus_delivery_minus_item[] =
    await api.functional.repos.hooks.deliveries.getByOwnerAndRepoAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposHooksDeliveries.GetQuery>(),
    );
  typia.assert(output);
}
