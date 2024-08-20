import api from "@kakasoo/github-sdk";
import { team } from "@kakasoo/github-sdk/lib/structures/team";
import typia from "typia";

export async function test_api_orgs_invitations_teams_getByOrgAndInvitation_id(
  connection: api.IConnection,
) {
  const output: team[] =
    await api.functional.orgs.invitations.teams.getByOrgAndInvitation_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
