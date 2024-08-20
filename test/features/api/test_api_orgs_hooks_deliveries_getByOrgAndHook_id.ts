import api from "@kakasoo/github-sdk";
import { IApiOrgsHooksDeliveries } from "@kakasoo/github-sdk/lib/structures/IApiOrgsHooksDeliveries";
import { hook_minus_delivery_minus_item } from "@kakasoo/github-sdk/lib/structures/hook_minus_delivery_minus_item";
import typia from "typia";

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
