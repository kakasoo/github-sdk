import api from "@kakasoo/github-sdk";
import { IApiReposActivity } from "@kakasoo/github-sdk/lib/structures/IApiReposActivity";
import { activity } from "@kakasoo/github-sdk/lib/structures/activity";
import typia from "typia";

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
