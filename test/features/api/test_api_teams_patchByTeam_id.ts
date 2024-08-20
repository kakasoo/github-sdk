import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team_minus_full } from "@kakasoo/github-sdk/lib/structures/team_minus_full";
import typia from "typia";

export async function test_api_teams_patchByTeam_id(
  connection: api.IConnection,
) {
  const output: team_minus_full = await api.functional.teams.patchByTeam_id(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
