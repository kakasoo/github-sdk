import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiOrgsCopilotBillingSeats } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsCopilotBillingSeats";

export async function test_api_orgs_copilot_billing_seats_getByOrg(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.orgs.copilot.billing.seats.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsCopilotBillingSeats.GetQuery>(),
    );
  typia.assert(output);
}
