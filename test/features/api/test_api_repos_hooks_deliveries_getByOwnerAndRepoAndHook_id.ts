import api from "@kakasoo/github-sdk";
import { IApiReposHooksDeliveries } from "@kakasoo/github-sdk/lib/structures/IApiReposHooksDeliveries";
import { hook_minus_delivery_minus_item } from "@kakasoo/github-sdk/lib/structures/hook_minus_delivery_minus_item";
import typia from "typia";

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
