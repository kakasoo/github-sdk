import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_security_minus_default_minus_configurations } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_security_minus_default_minus_configurations";

export async function test_api_orgs_code_security_configurations_defaults_getByOrg(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_default_minus_configurations =
    await api.functional.orgs.code_security.configurations.defaults.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
