import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespace } from "@ORGANIZATION/PROJECT-api/lib/structures/codespace";

export async function test_api_user_codespaces_getByCodespace_name(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.user.codespaces.getByCodespace_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
