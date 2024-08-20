import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_repos_codespaces_secrets_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.codespaces.secrets.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
