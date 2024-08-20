import api from "@kakasoo/github-sdk";
import typia, { tags } from "typia";

export async function test_api_repos_rulesets_eraseByOwnerAndRepoAndRuleset_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.rulesets.eraseByOwnerAndRepoAndRuleset_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<number & tags.Type<"int32">>(),
    );
  typia.assert(output);
}
