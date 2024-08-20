import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { copilot_minus_usage_minus_metrics } from "@ORGANIZATION/PROJECT-api/lib/structures/copilot_minus_usage_minus_metrics";
import { IApiOrgsCopilotUsage } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsCopilotUsage";

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
