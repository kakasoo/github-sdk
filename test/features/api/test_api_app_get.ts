import api from "@kakasoo/github-sdk";
import { integration } from "@kakasoo/github-sdk/lib/structures/integration";
import typia from "typia";

export async function test_api_app_get(connection: api.IConnection) {
  const output: integration = await api.functional.app.get(connection);
  typia.assert(output);
}
