import api from "@kakasoo/github-sdk";
import { interaction_minus_limit } from "@kakasoo/github-sdk/lib/structures/interaction_minus_limit";
import { interaction_minus_limit_minus_response } from "@kakasoo/github-sdk/lib/structures/interaction_minus_limit_minus_response";
import typia from "typia";

export async function test_api_user_interaction_limits_put(
  connection: api.IConnection,
) {
  const output: interaction_minus_limit_minus_response =
    await api.functional.user.interaction_limits.put(
      connection,
      typia.random<interaction_minus_limit>(),
    );
  typia.assert(output);
}
