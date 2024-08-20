import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_actions_permissions_putByOrg(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.actions.permissions.putByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
