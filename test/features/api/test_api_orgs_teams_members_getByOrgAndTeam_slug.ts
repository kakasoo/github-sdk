import api from "@kakasoo/github-sdk";
import { IApiOrgsTeamsMembers } from "@kakasoo/github-sdk/lib/structures/IApiOrgsTeamsMembers";
import { simple_minus_user } from "@kakasoo/github-sdk/lib/structures/simple_minus_user";
import typia from "typia";

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
