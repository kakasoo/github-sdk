import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { api_minus_overview } from "@ORGANIZATION/PROJECT-api/lib/structures/api_minus_overview";

export async function test_api_meta_get(connection: api.IConnection) {
  const output: api_minus_overview = await api.functional.meta.get(connection);
  typia.assert(output);
}
