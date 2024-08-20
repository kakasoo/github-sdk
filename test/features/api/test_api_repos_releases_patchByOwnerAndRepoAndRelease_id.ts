import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { release } from "@ORGANIZATION/PROJECT-api/lib/structures/release";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_releases_patchByOwnerAndRepoAndRelease_id(
  connection: api.IConnection,
) {
  const output: release =
    await api.functional.repos.releases.patchByOwnerAndRepoAndRelease_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
