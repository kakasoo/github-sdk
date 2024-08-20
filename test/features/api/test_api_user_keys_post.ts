import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { key } from "@ORGANIZATION/PROJECT-api/lib/structures/key";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_keys_post(connection: api.IConnection) {
  const output: key = await api.functional.user.keys.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
