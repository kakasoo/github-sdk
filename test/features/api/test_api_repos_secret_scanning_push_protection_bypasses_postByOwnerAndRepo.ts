import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { secret_minus_scanning_minus_push_minus_protection_minus_bypass } from "@ORGANIZATION/PROJECT-api/lib/structures/secret_minus_scanning_minus_push_minus_protection_minus_bypass";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_secret_scanning_push_protection_bypasses_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: secret_minus_scanning_minus_push_minus_protection_minus_bypass =
    await api.functional.repos.secret_scanning.push_protection_bypasses.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
