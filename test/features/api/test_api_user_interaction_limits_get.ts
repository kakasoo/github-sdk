import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_user_interaction_limits_get(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.interaction_limits.get(connection);
  typia.assert(output);
}
