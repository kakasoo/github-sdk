import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { gpg_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/gpg_minus_key";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_user_gpg_keys_post(connection: api.IConnection) {
  const output: gpg_minus_key = await api.functional.user.gpg_keys.post(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
