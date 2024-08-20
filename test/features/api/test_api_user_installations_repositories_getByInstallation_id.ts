import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";

export async function test_api_user_installations_repositories_getByInstallation_id(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.installations.repositories.getByInstallation_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
