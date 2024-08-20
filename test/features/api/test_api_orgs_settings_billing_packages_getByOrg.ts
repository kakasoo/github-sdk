import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { packages_minus_billing_minus_usage } from "@ORGANIZATION/PROJECT-api/lib/structures/packages_minus_billing_minus_usage";

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
