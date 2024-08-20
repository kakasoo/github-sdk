import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { starred_minus_repository } from "@ORGANIZATION/PROJECT-api/lib/structures/starred_minus_repository";
import { repository } from "@ORGANIZATION/PROJECT-api/lib/structures/repository";

export async function test_api_users_starred_getByUsername(
  connection: api.IConnection,
) {
  const output: starred_minus_repository[] | repository[] =
    await api.functional.users.starred.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
