import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_cache_minus_usage_minus_org_minus_enterprise } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_cache_minus_usage_minus_org_minus_enterprise";

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
