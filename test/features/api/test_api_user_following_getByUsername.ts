import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_following_getByUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.user.following.getByUsername(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
