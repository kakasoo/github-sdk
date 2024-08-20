import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { copilot_minus_usage_minus_metrics } from "@ORGANIZATION/PROJECT-api/lib/structures/copilot_minus_usage_minus_metrics";
import { IApiEnterprisesTeamCopilotUsage } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiEnterprisesTeamCopilotUsage";

export async function test_api_enterprises_team_copilot_usage_getByEnterpriseAndTeam_slug(
  connection: api.IConnection,
) {
  const output: copilot_minus_usage_minus_metrics[] =
    await api.functional.enterprises.team.copilot.usage.getByEnterpriseAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiEnterprisesTeamCopilotUsage.GetQuery>(),
    );
  typia.assert(output);
}
