import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { integration } from "@ORGANIZATION/PROJECT-api/lib/structures/integration";

export async function test_api_apps_getByApp_slug(connection: api.IConnection) {
  const output: integration = await api.functional.apps.getByApp_slug(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
