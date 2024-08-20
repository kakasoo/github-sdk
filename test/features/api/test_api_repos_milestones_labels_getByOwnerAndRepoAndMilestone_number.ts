import api from "@kakasoo/github-sdk";
import { label } from "@kakasoo/github-sdk/lib/structures/label";
import typia from "typia";

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
