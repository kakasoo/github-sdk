import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repository } from "@ORGANIZATION/PROJECT-api/lib/structures/repository";

export async function test_api_user_starred_get(connection: api.IConnection) {
  const output: repository[] =
    await api.functional.user.starred.get(connection);
  typia.assert(output);
}
