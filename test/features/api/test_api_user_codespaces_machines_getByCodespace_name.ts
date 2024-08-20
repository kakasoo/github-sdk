import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_user_codespaces_machines_getByCodespace_name(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.codespaces.machines.getByCodespace_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
