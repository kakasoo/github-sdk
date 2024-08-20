import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { installation } from "@ORGANIZATION/PROJECT-api/lib/structures/installation";

export async function test_api_orgs_installation_getByOrg(
  connection: api.IConnection,
) {
  const output: installation = await api.functional.orgs.installation.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
