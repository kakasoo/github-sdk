import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { check_minus_automated_minus_security_minus_fixes } from "@ORGANIZATION/PROJECT-api/lib/structures/check_minus_automated_minus_security_minus_fixes";

export async function test_api_repos_automated_security_fixes_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: check_minus_automated_minus_security_minus_fixes =
    await api.functional.repos.automated_security_fixes.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
