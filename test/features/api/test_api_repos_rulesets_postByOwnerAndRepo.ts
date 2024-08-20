import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_ruleset } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_ruleset";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_rulesets_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_ruleset =
    await api.functional.repos.rulesets.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
