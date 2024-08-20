import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_default_minus_setup } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_default_minus_setup";

export async function test_api_repos_code_scanning_default_setup_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_default_minus_setup =
    await api.functional.repos.code_scanning.default_setup.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
