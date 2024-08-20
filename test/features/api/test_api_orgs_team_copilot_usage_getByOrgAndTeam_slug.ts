import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { copilot_minus_usage_minus_metrics } from "@ORGANIZATION/PROJECT-api/lib/structures/copilot_minus_usage_minus_metrics";
import { IApiOrgsTeamCopilotUsage } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsTeamCopilotUsage";

export async function test_api_orgs_team_copilot_usage_getByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: copilot_minus_usage_minus_metrics[] =
    await api.functional.orgs.team.copilot.usage.getByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsTeamCopilotUsage.GetQuery>(),
    );
  typia.assert(output);
}
