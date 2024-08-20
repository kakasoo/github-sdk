import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_full } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_full";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_orgs_patchByOrg(connection: api.IConnection) {
  const output: organization_minus_full = await api.functional.orgs.patchByOrg(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
