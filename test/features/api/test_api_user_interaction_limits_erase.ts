import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_interaction_limits_erase(
  connection: api.IConnection,
) {
  const output = await api.functional.user.interaction_limits.erase(connection);
  typia.assert(output);
}
