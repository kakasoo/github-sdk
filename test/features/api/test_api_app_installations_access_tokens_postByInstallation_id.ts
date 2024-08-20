import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { installation_minus_token } from "@ORGANIZATION/PROJECT-api/lib/structures/installation_minus_token";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_app_installations_access_tokens_postByInstallation_id(
  connection: api.IConnection,
) {
  const output: installation_minus_token =
    await api.functional.app.installations.access_tokens.postByInstallation_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
