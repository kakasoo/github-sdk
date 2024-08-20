import api from "@kakasoo/github-sdk";
import { artifact } from "@kakasoo/github-sdk/lib/structures/artifact";
import typia from "typia";

export async function test_api_repos_actions_artifacts_getByOwnerAndRepoAndArtifact_id(
  connection: api.IConnection,
) {
  const output: artifact =
    await api.functional.repos.actions.artifacts.getByOwnerAndRepoAndArtifact_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
