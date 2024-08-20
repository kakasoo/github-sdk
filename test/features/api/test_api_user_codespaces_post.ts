import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespace } from "@ORGANIZATION/PROJECT-api/lib/structures/codespace";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_codespaces_post(
  connection: api.IConnection,
) {
  const output: codespace = await api.functional.user.codespaces.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
