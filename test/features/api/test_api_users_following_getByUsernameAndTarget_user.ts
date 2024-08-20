import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_users_following_getByUsernameAndTarget_user(
  connection: api.IConnection,
) {
  const output =
    await api.functional.users.following.getByUsernameAndTarget_user(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
