import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_user_installations_get(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.installations.get(connection);
  typia.assert(output);
}
