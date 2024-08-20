import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { minimal_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/minimal_minus_repository";
import { IApiUsersRepos } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUsersRepos";

export async function test_api_users_repos_getByUsername(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.users.repos.getByUsername(
      connection,
      typia.random<string>(),
      typia.random<IApiUsersRepos.GetQuery>(),
    );
  typia.assert(output);
}
