import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_orgs_actions_secrets_getByOrg(
  connection: api.IConnection,
) {
  const output: response = await api.functional.orgs.actions.secrets.getByOrg(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
