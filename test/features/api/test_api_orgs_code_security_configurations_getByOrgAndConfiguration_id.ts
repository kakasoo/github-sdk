import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_security_minus_configuration } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_security_minus_configuration";

export async function test_api_orgs_code_security_configurations_getByOrgAndConfiguration_id(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration =
    await api.functional.orgs.code_security.configurations.getByOrgAndConfiguration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
