import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { short_minus_blob } from "@ORGANIZATION/PROJECT-api/lib/structures/short_minus_blob";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_git_blobs_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: short_minus_blob =
    await api.functional.repos.git.blobs.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
