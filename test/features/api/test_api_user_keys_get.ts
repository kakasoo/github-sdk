import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { key } from "@ORGANIZATION/PROJECT-api/lib/structures/key";

export async function test_api_user_keys_get(connection: api.IConnection) {
  const output: key[] = await api.functional.user.keys.get(connection);
  typia.assert(output);
}
