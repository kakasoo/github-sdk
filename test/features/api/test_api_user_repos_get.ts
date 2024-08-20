import api from "@kakasoo/github-sdk";
import { IApiUserRepos } from "@kakasoo/github-sdk/lib/structures/IApiUserRepos";
import { repository } from "@kakasoo/github-sdk/lib/structures/repository";
import typia from "typia";

export async function test_api_user_repos_get(connection: api.IConnection) {
  const output: repository[] = await api.functional.user.repos.get(
    connection,
    typia.random<IApiUserRepos.GetQuery>(),
  );
  typia.assert(output);
}
