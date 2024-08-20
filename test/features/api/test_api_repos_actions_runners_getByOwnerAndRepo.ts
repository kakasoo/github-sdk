import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiReposActionsRunners } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposActionsRunners";

export async function test_api_repos_actions_runners_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.actions.runners.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposActionsRunners.GetQuery>(),
    );
  typia.assert(output);
}
