import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_following_putByUsername(
  connection: api.IConnection,
) {
  const output = await api.functional.user.following.putByUsername(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
