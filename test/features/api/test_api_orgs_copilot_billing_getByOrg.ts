import api from "@kakasoo/github-sdk";
import { copilot_minus_organization_minus_details } from "@kakasoo/github-sdk/lib/structures/copilot_minus_organization_minus_details";
import typia from "typia";

export async function test_api_orgs_copilot_billing_getByOrg(
  connection: api.IConnection,
) {
  const output: copilot_minus_organization_minus_details =
    await api.functional.orgs.copilot.billing.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
