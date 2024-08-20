import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_keys_eraseByKey_id(
  connection: api.IConnection,
) {
  const output = await api.functional.user.keys.eraseByKey_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
