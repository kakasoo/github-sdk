import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { repository_minus_ruleset } from "@kakasoo/github-sdk/lib/structures/repository_minus_ruleset";
import typia, { tags } from "typia";

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
