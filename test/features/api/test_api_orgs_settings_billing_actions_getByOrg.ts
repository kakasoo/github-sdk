import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_billing_minus_usage } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_billing_minus_usage";

export async function test_api_orgs_settings_billing_actions_getByOrg(
  connection: api.IConnection,
) {
  const output: actions_minus_billing_minus_usage =
    await api.functional.orgs.settings.billing.actions.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
