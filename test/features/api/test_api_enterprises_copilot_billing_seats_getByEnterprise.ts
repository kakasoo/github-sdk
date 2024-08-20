import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiEnterprisesCopilotBillingSeats } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiEnterprisesCopilotBillingSeats";

export async function test_api_enterprises_copilot_billing_seats_getByEnterprise(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.enterprises.copilot.billing.seats.getByEnterprise(
      connection,
      typia.random<string>(),
      typia.random<IApiEnterprisesCopilotBillingSeats.GetQuery>(),
    );
  typia.assert(output);
}
