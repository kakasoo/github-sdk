import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_app_installations_eraseByInstallation_id(
  connection: api.IConnection,
) {
  const output = await api.functional.app.installations.eraseByInstallation_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
