import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { empty_minus_object } from "@ORGANIZATION/PROJECT-api/lib/structures/empty_minus_object";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_codespaces_secrets_putBySecret_name(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.user.codespaces.secrets.putBySecret_name(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
