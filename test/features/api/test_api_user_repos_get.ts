import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository } from "@ORGANIZATION/PROJECT-api/lib/structures/repository";
import { IApiUserRepos } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUserRepos";

export async function test_api_user_repos_get(connection: api.IConnection) {
  const output: repository[] = await api.functional.user.repos.get(
    connection,
    typia.random<IApiUserRepos.GetQuery>(),
  );
  typia.assert(output);
}
