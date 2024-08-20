import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { milestone } from "@kakasoo/github-sdk/lib/structures/milestone";
import typia from "typia";

export async function test_api_repos_milestones_patchByOwnerAndRepoAndMilestone_number(
  connection: api.IConnection,
) {
  const output: milestone =
    await api.functional.repos.milestones.patchByOwnerAndRepoAndMilestone_number(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
