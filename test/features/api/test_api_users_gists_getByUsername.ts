import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { base_minus_gist } from "@ORGANIZATION/PROJECT-api/lib/structures/base_minus_gist";

export async function test_api_users_gists_getByUsername(
  connection: api.IConnection,
) {
  const output: base_minus_gist[] =
    await api.functional.users.gists.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
