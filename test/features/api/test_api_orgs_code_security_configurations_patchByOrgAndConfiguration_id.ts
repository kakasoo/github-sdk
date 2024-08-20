import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_security_minus_configuration } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_security_minus_configuration";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_code_security_configurations_patchByOrgAndConfiguration_id(
  connection: api.IConnection,
) {
  const output: code_minus_security_minus_configuration =
    await api.functional.orgs.code_security.configurations.patchByOrgAndConfiguration_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
