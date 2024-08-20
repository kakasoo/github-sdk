import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { ssh_minus_signing_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/ssh_minus_signing_minus_key";

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
