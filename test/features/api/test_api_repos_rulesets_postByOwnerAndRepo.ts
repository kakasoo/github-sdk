import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { repository_minus_ruleset } from "@kakasoo/github-sdk/lib/structures/repository_minus_ruleset";
import typia from "typia";

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
