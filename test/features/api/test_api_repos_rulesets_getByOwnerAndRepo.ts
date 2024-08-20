import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_ruleset } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_ruleset";
import { IApiReposRulesets } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposRulesets";

export async function test_api_repos_rulesets_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_ruleset[] =
    await api.functional.repos.rulesets.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposRulesets.GetQuery>(),
    );
  typia.assert(output);
}
