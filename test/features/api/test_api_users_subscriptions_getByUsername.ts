import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { minimal_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/minimal_minus_repository";

export async function test_api_users_subscriptions_getByUsername(
  connection: api.IConnection,
) {
  const output: minimal_minus_repository[] =
    await api.functional.users.subscriptions.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}