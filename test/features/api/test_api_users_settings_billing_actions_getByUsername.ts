import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_billing_minus_usage } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_billing_minus_usage";

export async function test_api_users_settings_billing_actions_getByUsername(
  connection: api.IConnection,
) {
  const output: actions_minus_billing_minus_usage =
    await api.functional.users.settings.billing.actions.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
