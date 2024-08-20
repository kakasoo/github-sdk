import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { copilot_minus_usage_minus_metrics } from "@ORGANIZATION/PROJECT-api/lib/structures/copilot_minus_usage_minus_metrics";
import { IApiEnterprisesCopilotUsage } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiEnterprisesCopilotUsage";

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
