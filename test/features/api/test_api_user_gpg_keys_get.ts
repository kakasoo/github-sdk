import api from "@kakasoo/github-sdk";
import { gpg_minus_key } from "@kakasoo/github-sdk/lib/structures/gpg_minus_key";
import typia from "typia";

export async function test_api_user_gpg_keys_get(connection: api.IConnection) {
  const output: gpg_minus_key[] =
    await api.functional.user.gpg_keys.get(connection);
  typia.assert(output);
}
