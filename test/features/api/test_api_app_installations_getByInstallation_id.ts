import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { installation } from "@ORGANIZATION/PROJECT-api/lib/structures/installation";

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
