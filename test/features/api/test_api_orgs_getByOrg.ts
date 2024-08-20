import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { organization_minus_full } from "@ORGANIZATION/PROJECT-api/lib/structures/organization_minus_full";

export async function test_api_orgs_getByOrg(connection: api.IConnection) {
  const output: organization_minus_full = await api.functional.orgs.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
