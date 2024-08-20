import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_advisory } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_advisory";

export async function test_api_repos_security_advisories_getByOwnerAndRepoAndGhsa_id(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory =
    await api.functional.repos.security_advisories.getByOwnerAndRepoAndGhsa_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
