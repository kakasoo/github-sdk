import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_user_gpg_keys_eraseByGpg_key_id(
  connection: api.IConnection,
) {
  const output = await api.functional.user.gpg_keys.eraseByGpg_key_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
