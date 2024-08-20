import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_installation_repositories_get(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.installation.repositories.get(connection);
  typia.assert(output);
}
