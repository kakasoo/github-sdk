import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { integration } from "@kakasoo/github-sdk/lib/structures/integration";
import typia from "typia";

export async function test_api_repos_branches_protection_restrictions_apps_postByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: integration[] =
    await api.functional.repos.branches.protection.restrictions.apps.postByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
