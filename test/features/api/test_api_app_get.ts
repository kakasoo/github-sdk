import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { integration } from "@ORGANIZATION/PROJECT-api/lib/structures/integration";

export async function test_api_app_get(connection: api.IConnection) {
  const output: integration = await api.functional.app.get(connection);
  typia.assert(output);
}
