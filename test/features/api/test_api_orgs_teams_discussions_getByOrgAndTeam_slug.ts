import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_discussion } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_discussion";
import { IApiOrgsTeamsDiscussions } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsTeamsDiscussions";

export async function test_api_orgs_teams_discussions_getByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: team_minus_discussion[] =
    await api.functional.orgs.teams.discussions.getByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsTeamsDiscussions.GetQuery>(),
    );
  typia.assert(output);
}
