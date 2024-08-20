import api from "@kakasoo/github-sdk";
import { actions_minus_billing_minus_usage } from "@kakasoo/github-sdk/lib/structures/actions_minus_billing_minus_usage";
import typia from "typia";

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
