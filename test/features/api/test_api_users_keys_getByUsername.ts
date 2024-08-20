import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { key_minus_simple } from "@ORGANIZATION/PROJECT-api/lib/structures/key_minus_simple";

export async function test_api_users_keys_getByUsername(
  connection: api.IConnection,
) {
  const output: key_minus_simple[] =
    await api.functional.users.keys.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
