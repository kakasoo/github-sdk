import api from "@kakasoo/github-sdk";
import { team_minus_simple } from "@kakasoo/github-sdk/lib/structures/team_minus_simple";
import typia from "typia";

export async function test_api_orgs_security_managers_getByOrg(
  connection: api.IConnection,
) {
  const output: team_minus_simple[] =
    await api.functional.orgs.security_managers.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
