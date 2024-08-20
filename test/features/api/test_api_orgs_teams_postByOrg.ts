import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { team_minus_full } from "@kakasoo/github-sdk/lib/structures/team_minus_full";
import typia from "typia";

export async function test_api_orgs_teams_postByOrg(
  connection: api.IConnection,
) {
  const output: team_minus_full = await api.functional.orgs.teams.postByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
