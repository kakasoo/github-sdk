import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_orgs_codespaces_getByOrg(
  connection: api.IConnection,
) {
  const output: response = await api.functional.orgs.codespaces.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
