import api from "@kakasoo/github-sdk";
import { IApiSearchUsers } from "@kakasoo/github-sdk/lib/structures/IApiSearchUsers";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_search_users_get(connection: api.IConnection) {
  const output: response = await api.functional.search.users.get(
    connection,
    typia.random<IApiSearchUsers.GetQuery>(),
  );
  typia.assert(output);
}
