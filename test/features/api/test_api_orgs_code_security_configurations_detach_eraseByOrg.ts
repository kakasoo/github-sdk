import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_code_security_configurations_detach_eraseByOrg(
  connection: api.IConnection,
) {
  const output =
    await api.functional.orgs.code_security.configurations.detach.eraseByOrg(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
