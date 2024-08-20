import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { activity } from "@ORGANIZATION/PROJECT-api/lib/structures/activity";
import { IApiReposActivity } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposActivity";

export async function test_api_repos_activity_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: activity[] =
    await api.functional.repos.activity.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposActivity.GetQuery>(),
    );
  typia.assert(output);
}
