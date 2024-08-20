import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { hovercard } from "@ORGANIZATION/PROJECT-api/lib/structures/hovercard";
import { IApiUsersHovercard } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUsersHovercard";

export async function test_api_users_hovercard_getByUsername(
  connection: api.IConnection,
) {
  const output: hovercard = await api.functional.users.hovercard.getByUsername(
    connection,
    typia.random<string>(),
    typia.random<IApiUsersHovercard.GetQuery>(),
  );
  typia.assert(output);
}
