import api from "@kakasoo/github-sdk";
import { ssh_minus_signing_minus_key } from "@kakasoo/github-sdk/lib/structures/ssh_minus_signing_minus_key";
import typia from "typia";

export async function test_api_users_ssh_signing_keys_getByUsername(
  connection: api.IConnection,
) {
  const output: ssh_minus_signing_minus_key[] =
    await api.functional.users.ssh_signing_keys.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
