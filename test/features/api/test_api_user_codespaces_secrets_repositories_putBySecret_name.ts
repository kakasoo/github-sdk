import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_codespaces_secrets_repositories_putBySecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.codespaces.secrets.repositories.putBySecret_name(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
