import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { license_minus_content } from "@ORGANIZATION/PROJECT-api/lib/structures/license_minus_content";

export async function test_api_repos_license_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: license_minus_content =
    await api.functional.repos.license.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
