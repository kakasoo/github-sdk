import api from "@kakasoo/github-sdk";
import { organization_minus_invitation } from "@kakasoo/github-sdk/lib/structures/organization_minus_invitation";
import typia from "typia";

export async function test_api_teams_invitations_getByTeam_id(
  connection: api.IConnection,
) {
  const output: organization_minus_invitation[] =
    await api.functional.teams.invitations.getByTeam_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
