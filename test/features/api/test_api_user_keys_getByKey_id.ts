import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { key } from "@ORGANIZATION/PROJECT-api/lib/structures/key";

export async function test_api_user_keys_getByKey_id(
  connection: api.IConnection,
) {
  const output: key = await api.functional.user.keys.getByKey_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
