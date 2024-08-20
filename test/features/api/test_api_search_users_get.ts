import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiSearchUsers } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiSearchUsers";

export async function test_api_search_users_get(connection: api.IConnection) {
  const output: response = await api.functional.search.users.get(
    connection,
    typia.random<IApiSearchUsers.GetQuery>(),
  );
  typia.assert(output);
}
