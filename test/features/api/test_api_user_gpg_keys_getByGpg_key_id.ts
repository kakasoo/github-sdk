import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gpg_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/gpg_minus_key";

export async function test_api_user_gpg_keys_getByGpg_key_id(
  connection: api.IConnection,
) {
  const output: gpg_minus_key =
    await api.functional.user.gpg_keys.getByGpg_key_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
