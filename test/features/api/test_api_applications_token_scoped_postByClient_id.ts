import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { authorization } from "@ORGANIZATION/PROJECT-api/lib/structures/authorization";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_applications_token_scoped_postByClient_id(
  connection: api.IConnection,
) {
  const output: authorization =
    await api.functional.applications.token.scoped.postByClient_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
