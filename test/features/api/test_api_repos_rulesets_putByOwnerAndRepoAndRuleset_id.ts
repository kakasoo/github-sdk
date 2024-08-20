import api from "@ORGANIZATION/PROJECT-api";
import typia, { tags } from "typia";

import { repository_minus_ruleset } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_ruleset";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_rulesets_putByOwnerAndRepoAndRuleset_id(
  connection: api.IConnection,
) {
  const output: repository_minus_ruleset =
    await api.functional.repos.rulesets.putByOwnerAndRepoAndRuleset_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
