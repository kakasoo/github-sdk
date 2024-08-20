import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_emojis_get(connection: api.IConnection) {
  const output: response = await api.functional.emojis.get(connection);
  typia.assert(output);
}
