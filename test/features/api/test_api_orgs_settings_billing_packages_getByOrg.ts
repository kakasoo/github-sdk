import api from "@kakasoo/github-sdk";
import { packages_minus_billing_minus_usage } from "@kakasoo/github-sdk/lib/structures/packages_minus_billing_minus_usage";
import typia from "typia";

export async function test_api_orgs_settings_billing_packages_getByOrg(
  connection: api.IConnection,
) {
  const output: packages_minus_billing_minus_usage =
    await api.functional.orgs.settings.billing.packages.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
