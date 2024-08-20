import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_installations_repositories_eraseByInstallation_idAndRepository_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.installations.repositories.eraseByInstallation_idAndRepository_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
