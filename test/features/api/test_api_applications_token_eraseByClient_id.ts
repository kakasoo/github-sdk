import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_applications_token_eraseByClient_id(
  connection: api.IConnection,
) {
  const output = await api.functional.applications.token.eraseByClient_id(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}