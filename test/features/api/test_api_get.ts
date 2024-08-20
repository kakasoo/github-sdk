import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { root } from "@ORGANIZATION/PROJECT-api/lib/structures/root";

export async function test_api_get(connection: api.IConnection) {
  const output: root = await api.functional.get(connection);
  typia.assert(output);
}
