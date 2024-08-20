import api from "@kakasoo/github-sdk";
import { IApiUsersRepos } from "@kakasoo/github-sdk/lib/structures/IApiUsersRepos";
import { minimal_minus_repository } from "@kakasoo/github-sdk/lib/structures/minimal_minus_repository";
import typia from "typia";

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
