import api from "@kakasoo/github-sdk";
import { IApiOrgsCopilotUsage } from "@kakasoo/github-sdk/lib/structures/IApiOrgsCopilotUsage";
import { copilot_minus_usage_minus_metrics } from "@kakasoo/github-sdk/lib/structures/copilot_minus_usage_minus_metrics";
import typia from "typia";

export async function test_api_orgs_copilot_usage_getByOrg(
  connection: api.IConnection,
) {
  const output: copilot_minus_usage_minus_metrics[] =
    await api.functional.orgs.copilot.usage.getByOrg(
      connection,
      typia.random<string>(),
      typia.random<IApiOrgsCopilotUsage.GetQuery>(),
    );
  typia.assert(output);
}
