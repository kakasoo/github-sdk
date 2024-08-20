import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { release } from "@ORGANIZATION/PROJECT-api/lib/structures/release";

export async function test_api_repos_releases_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: release[] =
    await api.functional.repos.releases.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
