import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { interaction_minus_limit_minus_response } from "@ORGANIZATION/PROJECT-api/lib/structures/interaction_minus_limit_minus_response";
import { interaction_minus_limit } from "@ORGANIZATION/PROJECT-api/lib/structures/interaction_minus_limit";

export async function test_api_repos_interaction_limits_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: interaction_minus_limit_minus_response =
    await api.functional.repos.interaction_limits.putByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<interaction_minus_limit>(),
    );
  typia.assert(output);
}
