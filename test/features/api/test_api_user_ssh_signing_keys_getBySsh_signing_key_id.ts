import api from "@kakasoo/github-sdk";
import { ssh_minus_signing_minus_key } from "@kakasoo/github-sdk/lib/structures/ssh_minus_signing_minus_key";
import typia from "typia";

export async function test_api_user_ssh_signing_keys_getBySsh_signing_key_id(
  connection: api.IConnection,
) {
  const output: ssh_minus_signing_minus_key =
    await api.functional.user.ssh_signing_keys.getBySsh_signing_key_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
