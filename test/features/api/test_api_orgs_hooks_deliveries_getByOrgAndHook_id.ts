import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hook_minus_delivery_minus_item } from "@ORGANIZATION/PROJECT-api/lib/structures/hook_minus_delivery_minus_item";
import { IApiOrgsHooksDeliveries } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsHooksDeliveries";

export async function test_api_orgs_hooks_deliveries_getByOrgAndHook_id(
  connection: api.IConnection,
) {
  const output: hook_minus_delivery_minus_item[] =
    await api.functional.orgs.hooks.deliveries.getByOrgAndHook_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsHooksDeliveries.GetQuery>(),
    );
  typia.assert(output);
}
