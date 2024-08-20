import api from "@kakasoo/github-sdk";
import { IApiEnterprisesTeamCopilotUsage } from "@kakasoo/github-sdk/lib/structures/IApiEnterprisesTeamCopilotUsage";
import { copilot_minus_usage_minus_metrics } from "@kakasoo/github-sdk/lib/structures/copilot_minus_usage_minus_metrics";
import typia from "typia";

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
