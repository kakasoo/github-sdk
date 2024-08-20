import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_orgs_installations_getByOrg(
  connection: api.IConnection,
) {
  const output: response = await api.functional.orgs.installations.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
