import api from "@kakasoo/github-sdk";
import { combined_minus_billing_minus_usage } from "@kakasoo/github-sdk/lib/structures/combined_minus_billing_minus_usage";
import typia from "typia";

export async function test_api_orgs_settings_billing_shared_storage_getByOrg(
  connection: api.IConnection,
) {
  const output: combined_minus_billing_minus_usage =
    await api.functional.orgs.settings.billing.shared_storage.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
