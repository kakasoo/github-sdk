import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { artifact } from "@ORGANIZATION/PROJECT-api/lib/structures/artifact";

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
