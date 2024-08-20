import api from "@kakasoo/github-sdk";
import { team } from "@kakasoo/github-sdk/lib/structures/team";
import typia from "typia";

export async function test_api_teams_teams_getByTeam_id(
  connection: api.IConnection,
) {
  const output: team[] = await api.functional.teams.teams.getByTeam_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
