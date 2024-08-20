import api from "@kakasoo/github-sdk";
import { IApiReposActionsRunners } from "@kakasoo/github-sdk/lib/structures/IApiReposActionsRunners";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
