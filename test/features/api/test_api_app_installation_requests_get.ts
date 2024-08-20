import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { integration_minus_installation_minus_request } from "@ORGANIZATION/PROJECT-api/lib/structures/integration_minus_installation_minus_request";

export async function test_api_app_installation_requests_get(
  connection: api.IConnection,
) {
  const output: integration_minus_installation_minus_request[] =
    await api.functional.app.installation_requests.get(connection);
  typia.assert(output);
}
