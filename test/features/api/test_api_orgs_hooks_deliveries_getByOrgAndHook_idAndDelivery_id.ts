import api from "@kakasoo/github-sdk";
import { hook_minus_delivery } from "@kakasoo/github-sdk/lib/structures/hook_minus_delivery";
import typia from "typia";

export async function test_api_orgs_hooks_deliveries_getByOrgAndHook_idAndDelivery_id(
  connection: api.IConnection,
) {
  const output: hook_minus_delivery =
    await api.functional.orgs.hooks.deliveries.getByOrgAndHook_idAndDelivery_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
