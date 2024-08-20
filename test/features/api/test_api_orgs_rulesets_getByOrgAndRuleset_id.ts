import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { repository_minus_ruleset } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_ruleset";

export async function test_api_orgs_rulesets_getByOrgAndRuleset_id(
  connection: api.IConnection,
) {
  const output: repository_minus_ruleset =
    await api.functional.orgs.rulesets.getByOrgAndRuleset_id(
      connection,
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
