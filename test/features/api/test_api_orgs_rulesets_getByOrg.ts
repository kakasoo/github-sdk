import api from "@kakasoo/github-sdk";
import { repository_minus_ruleset } from "@kakasoo/github-sdk/lib/structures/repository_minus_ruleset";
import typia from "typia";

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
