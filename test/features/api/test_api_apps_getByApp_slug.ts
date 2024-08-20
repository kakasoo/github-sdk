import api from "@kakasoo/github-sdk";
import { integration } from "@kakasoo/github-sdk/lib/structures/integration";
import typia from "typia";

export async function test_api_apps_getByApp_slug(connection: api.IConnection) {
  const output: integration = await api.functional.apps.getByApp_slug(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
