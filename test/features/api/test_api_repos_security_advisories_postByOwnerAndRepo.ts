import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository_minus_advisory } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_advisory";
import { repository_minus_advisory_minus_create } from "@ORGANIZATION/PROJECT-api/lib/structures/repository_minus_advisory_minus_create";

export async function test_api_repos_security_advisories_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: repository_minus_advisory =
    await api.functional.repos.security_advisories.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<repository_minus_advisory_minus_create>(),
    );
  typia.assert(output);
}
