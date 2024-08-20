import api from "@kakasoo/github-sdk";
import { milestone } from "@kakasoo/github-sdk/lib/structures/milestone";
import typia from "typia";

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
