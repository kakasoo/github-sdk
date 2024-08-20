import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespace } from "@ORGANIZATION/PROJECT-api/lib/structures/codespace";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_codespaces_patchByCodespace_name(
  connection: api.IConnection,
) {
  const output: codespace =
    await api.functional.user.codespaces.patchByCodespace_name(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
