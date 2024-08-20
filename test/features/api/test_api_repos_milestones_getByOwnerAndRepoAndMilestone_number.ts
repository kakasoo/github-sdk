import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { milestone } from "@ORGANIZATION/PROJECT-api/lib/structures/milestone";

export async function test_api_repos_milestones_getByOwnerAndRepoAndMilestone_number(
  connection: api.IConnection,
) {
  const output: milestone =
    await api.functional.repos.milestones.getByOwnerAndRepoAndMilestone_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
