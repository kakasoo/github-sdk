import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_milestones_eraseByOwnerAndRepoAndMilestone_number(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.milestones.eraseByOwnerAndRepoAndMilestone_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}