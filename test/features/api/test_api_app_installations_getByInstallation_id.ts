import api from "@kakasoo/github-sdk";
import { installation } from "@kakasoo/github-sdk/lib/structures/installation";
import typia from "typia";

export async function test_api_app_installations_getByInstallation_id(
  connection: api.IConnection,
) {
  const output: installation =
    await api.functional.app.installations.getByInstallation_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
