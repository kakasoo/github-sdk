import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { label } from "@ORGANIZATION/PROJECT-api/lib/structures/label";

export async function test_api_repos_milestones_labels_getByOwnerAndRepoAndMilestone_number(
  connection: api.IConnection,
) {
  const output: label[] =
    await api.functional.repos.milestones.labels.getByOwnerAndRepoAndMilestone_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
