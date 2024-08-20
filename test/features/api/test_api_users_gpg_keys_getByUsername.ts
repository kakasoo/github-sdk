import api from "@kakasoo/github-sdk";
import { gpg_minus_key } from "@kakasoo/github-sdk/lib/structures/gpg_minus_key";
import typia from "typia";

export async function test_api_users_gpg_keys_getByUsername(
  connection: api.IConnection,
) {
  const output: gpg_minus_key[] =
    await api.functional.users.gpg_keys.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
