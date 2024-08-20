import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_orgs_hooks_deliveries_attempts_postByOrgAndHook_idAndDelivery_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.hooks.deliveries.attempts.postByOrgAndHook_idAndDelivery_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
