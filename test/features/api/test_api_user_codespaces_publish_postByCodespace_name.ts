import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codespace_minus_with_minus_full_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/codespace_minus_with_minus_full_minus_repository";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_codespaces_publish_postByCodespace_name(
  connection: api.IConnection,
) {
  const output: codespace_minus_with_minus_full_minus_repository =
    await api.functional.user.codespaces.publish.postByCodespace_name(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
