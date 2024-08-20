import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { team_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/team_minus_simple";

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
