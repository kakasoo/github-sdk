import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_security_minus_configuration_minus_for_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_security_minus_configuration_minus_for_minus_repository";

export async function test_api_repos_code_security_configuration_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration_minus_for_minus_repository =
    await api.functional.repos.code_security_configuration.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
