import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { copilot_minus_organization_minus_details } from "@ORGANIZATION/PROJECT-api/lib/structures/copilot_minus_organization_minus_details";

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
