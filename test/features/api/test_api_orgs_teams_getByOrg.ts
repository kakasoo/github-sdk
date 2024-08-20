import api from "@kakasoo/github-sdk";
import { team } from "@kakasoo/github-sdk/lib/structures/team";
import typia from "typia";

export async function test_api_orgs_teams_getByOrg(
  connection: api.IConnection,
) {
  const output: team[] = await api.functional.orgs.teams.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
