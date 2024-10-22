import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_app_installations_suspended_eraseByInstallation_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.app.installations.suspended.eraseByInstallation_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
