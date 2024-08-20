import api from "@kakasoo/github-sdk";
import { actions_minus_cache_minus_usage_minus_org_minus_enterprise } from "@kakasoo/github-sdk/lib/structures/actions_minus_cache_minus_usage_minus_org_minus_enterprise";
import typia from "typia";

export async function test_api_orgs_actions_cache_usage_getByOrg(
  connection: api.IConnection,
) {
  const output: actions_minus_cache_minus_usage_minus_org_minus_enterprise =
    await api.functional.orgs.actions.cache.usage.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
