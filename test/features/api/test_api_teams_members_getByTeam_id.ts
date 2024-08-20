import api from "@kakasoo/github-sdk";
import { IApiTeamsMembers } from "@kakasoo/github-sdk/lib/structures/IApiTeamsMembers";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

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
