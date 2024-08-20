import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { empty_minus_object } from "@ORGANIZATION/PROJECT-api/lib/structures/empty_minus_object";
import { code_minus_scanning_minus_default_minus_setup_minus_update } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_default_minus_setup_minus_update";

export async function test_api_repos_code_scanning_default_setup_patchByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.repos.code_scanning.default_setup.patchByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<code_minus_scanning_minus_default_minus_setup_minus_update>(),
    );
  typia.assert(output);
}
