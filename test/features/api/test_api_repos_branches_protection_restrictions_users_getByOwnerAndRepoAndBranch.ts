import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";

export async function test_api_repos_branches_protection_restrictions_users_getByOwnerAndRepoAndBranch(
  connection: api.IConnection,
) {
  const output: simple_minus_user[] =
    await api.functional.repos.branches.protection.restrictions.users.getByOwnerAndRepoAndBranch(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
