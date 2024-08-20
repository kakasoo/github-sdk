import api from "@kakasoo/github-sdk";
import { IApiReposMilestones } from "@kakasoo/github-sdk/lib/structures/IApiReposMilestones";
import { milestone } from "@kakasoo/github-sdk/lib/structures/milestone";
import typia from "typia";

export async function test_api_repos_milestones_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: milestone[] =
    await api.functional.repos.milestones.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposMilestones.GetQuery>(),
    );
  typia.assert(output);
}
