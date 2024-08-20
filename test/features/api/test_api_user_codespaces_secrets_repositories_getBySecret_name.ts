import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_user_codespaces_secrets_repositories_getBySecret_name(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.codespaces.secrets.repositories.getBySecret_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
