import api from "@kakasoo/github-sdk";
import { packages_minus_billing_minus_usage } from "@kakasoo/github-sdk/lib/structures/packages_minus_billing_minus_usage";
import typia from "typia";

export async function test_api_users_settings_billing_packages_getByUsername(
  connection: api.IConnection,
) {
  const output: packages_minus_billing_minus_usage =
    await api.functional.users.settings.billing.packages.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
