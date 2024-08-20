import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { private_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/private_minus_user";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_patch(connection: api.IConnection) {
  const output: private_minus_user = await api.functional.user.patch(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
