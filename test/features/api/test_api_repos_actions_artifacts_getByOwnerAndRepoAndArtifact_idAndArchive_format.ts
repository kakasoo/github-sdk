import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_actions_artifacts_getByOwnerAndRepoAndArtifact_idAndArchive_format(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.actions.artifacts.getByOwnerAndRepoAndArtifact_idAndArchive_format(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
