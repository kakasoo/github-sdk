import api from "@kakasoo/github-sdk";
import { integration } from "@kakasoo/github-sdk/lib/structures/integration";
import typia from "typia";

export async function test_api_repos_branches_protection_restrictions_apps_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: integration[] =
    await api.functional.repos.branches.protection.restrictions.apps.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
