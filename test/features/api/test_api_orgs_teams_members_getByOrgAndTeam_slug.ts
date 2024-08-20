import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";
import { IApiOrgsTeamsMembers } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsTeamsMembers";

export async function test_api_orgs_teams_members_getByOrgAndTeam_slug(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.orgs.teams.members.getByOrgAndTeam_slug(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiOrgsTeamsMembers.GetQuery>(),
    );
  typia.assert(output);
}
