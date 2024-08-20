import api from "@kakasoo/github-sdk";
import { IApiReposRulesets } from "@kakasoo/github-sdk/lib/structures/IApiReposRulesets";
import { repository_minus_ruleset } from "@kakasoo/github-sdk/lib/structures/repository_minus_ruleset";
import typia from "typia";

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
