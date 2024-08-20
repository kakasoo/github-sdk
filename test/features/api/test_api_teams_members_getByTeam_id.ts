import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";
import { IApiTeamsMembers } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiTeamsMembers";

export async function test_api_teams_members_getByTeam_id(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.teams.members.getByTeam_id(
      connection,
      typia.random<string>(),
      typia.random<IApiTeamsMembers.GetQuery>(),
    );
  typia.assert(output);
}
