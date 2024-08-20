import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespaces_minus_secret } from "@ORGANIZATION/PROJECT-api/lib/structures/codespaces_minus_secret";

export async function test_api_user_codespaces_secrets_getBySecret_name(
  connection: api.IConnection,
) {
  const output: codespaces_minus_secret =
    await api.functional.user.codespaces.secrets.getBySecret_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
