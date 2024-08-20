import api from "@kakasoo/github-sdk";
import { IApiEnterprisesCopilotUsage } from "@kakasoo/github-sdk/lib/structures/IApiEnterprisesCopilotUsage";
import { copilot_minus_usage_minus_metrics } from "@kakasoo/github-sdk/lib/structures/copilot_minus_usage_minus_metrics";
import typia from "typia";

export async function test_api_enterprises_copilot_usage_getByEnterprise(
  connection: api.IConnection,
) {
  const output: copilot_minus_usage_minus_metrics[] =
    await api.functional.enterprises.copilot.usage.getByEnterprise(
      connection,
      typia.random<string>(),
      typia.random<IApiEnterprisesCopilotUsage.GetQuery>(),
    );
  typia.assert(output);
}
