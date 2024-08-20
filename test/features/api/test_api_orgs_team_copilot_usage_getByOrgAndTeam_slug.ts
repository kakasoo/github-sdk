import api from "@kakasoo/github-sdk";
import { IApiOrgsTeamCopilotUsage } from "@kakasoo/github-sdk/lib/structures/IApiOrgsTeamCopilotUsage";
import { copilot_minus_usage_minus_metrics } from "@kakasoo/github-sdk/lib/structures/copilot_minus_usage_minus_metrics";
import typia from "typia";

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
