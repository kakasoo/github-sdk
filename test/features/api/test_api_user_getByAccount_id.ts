import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { private_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/private_minus_user";
import { public_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/public_minus_user";

export async function test_api_user_getByAccount_id(
  connection: api.IConnection,
) {
  const output: private_minus_user | public_minus_user =
    await api.functional.user.getByAccount_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
