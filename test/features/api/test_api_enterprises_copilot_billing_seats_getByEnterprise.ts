import api from "@kakasoo/github-sdk";
import { IApiEnterprisesCopilotBillingSeats } from "@kakasoo/github-sdk/lib/structures/IApiEnterprisesCopilotBillingSeats";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
