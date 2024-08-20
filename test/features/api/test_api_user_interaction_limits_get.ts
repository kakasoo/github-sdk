import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_user_interaction_limits_get(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.interaction_limits.get(connection);
  typia.assert(output);
}
