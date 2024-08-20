import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gpg_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/gpg_minus_key";

export async function test_api_users_gpg_keys_getByUsername(
  connection: api.IConnection,
) {
  const output: gpg_minus_key[] =
    await api.functional.users.gpg_keys.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
