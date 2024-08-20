import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_user } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_user";

export async function test_api_user_following_get(connection: api.IConnection) {
  const output: simple_minus_user[] =
    await api.functional.user.following.get(connection);
  typia.assert(output);
}