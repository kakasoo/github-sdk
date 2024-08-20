import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_actions_variables_patchByOrgAndName(
  connection: api.IConnection,
) {
  const output = await api.functional.orgs.actions.variables.patchByOrgAndName(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
