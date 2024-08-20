import api from "@kakasoo/github-sdk";
import { integration_minus_installation_minus_request } from "@kakasoo/github-sdk/lib/structures/integration_minus_installation_minus_request";
import typia from "typia";

export async function test_api_app_installation_requests_get(
  connection: api.IConnection,
) {
  const output: integration_minus_installation_minus_request[] =
    await api.functional.app.installation_requests.get(connection);
  typia.assert(output);
}
