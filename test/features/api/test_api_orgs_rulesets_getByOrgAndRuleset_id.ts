import api from "@kakasoo/github-sdk";
import { repository_minus_ruleset } from "@kakasoo/github-sdk/lib/structures/repository_minus_ruleset";
import typia, { tags } from "typia";

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
