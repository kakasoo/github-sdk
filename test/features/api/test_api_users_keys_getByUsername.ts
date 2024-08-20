import api from "@kakasoo/github-sdk";
import { key_minus_simple } from "@kakasoo/github-sdk/lib/structures/key_minus_simple";
import typia from "typia";

export async function test_api_users_keys_getByUsername(
  connection: api.IConnection,
) {
  const output: key_minus_simple[] =
    await api.functional.users.keys.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
