import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_ruleset } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_ruleset";

export async function test_api_orgs_rulesets_getByOrg(
  connection: api.IConnection,
) {
  const output: repository_minus_ruleset[] =
    await api.functional.orgs.rulesets.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
