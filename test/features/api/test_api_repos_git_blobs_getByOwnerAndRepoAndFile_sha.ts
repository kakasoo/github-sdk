import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { blob } from "@ORGANIZATION/PROJECT-api/lib/structures/blob";

export async function test_api_repos_git_blobs_getByOwnerAndRepoAndFile_sha(
  connection: api.IConnection,
) {
  const output: blob =
    await api.functional.repos.git.blobs.getByOwnerAndRepoAndFile_sha(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
