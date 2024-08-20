import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { milestone } from "@ORGANIZATION/PROJECT-api/lib/structures/milestone";
import { IApiReposMilestones } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposMilestones";

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
