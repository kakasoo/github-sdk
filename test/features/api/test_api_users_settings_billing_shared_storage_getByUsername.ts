import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { combined_minus_billing_minus_usage } from "@ORGANIZATION/PROJECT-api/lib/structures/combined_minus_billing_minus_usage";

export async function test_api_users_settings_billing_shared_storage_getByUsername(
  connection: api.IConnection,
) {
  const output: combined_minus_billing_minus_usage =
    await api.functional.users.settings.billing.shared_storage.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
