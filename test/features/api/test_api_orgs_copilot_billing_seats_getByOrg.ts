import api from "@kakasoo/github-sdk";
import { IApiOrgsCopilotBillingSeats } from "@kakasoo/github-sdk/lib/structures/IApiOrgsCopilotBillingSeats";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
