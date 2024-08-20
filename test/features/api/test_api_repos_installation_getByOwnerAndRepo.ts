import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { installation } from "@ORGANIZATION/PROJECT-api/lib/structures/installation";

export async function test_api_repos_installation_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: installation =
    await api.functional.repos.installation.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
