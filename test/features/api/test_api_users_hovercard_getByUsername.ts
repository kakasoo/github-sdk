import api from "@kakasoo/github-sdk";
import { IApiUsersHovercard } from "@kakasoo/github-sdk/lib/structures/IApiUsersHovercard";
import { hovercard } from "@kakasoo/github-sdk/lib/structures/hovercard";
import typia from "typia";

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
