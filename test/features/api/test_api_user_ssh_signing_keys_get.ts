import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { ssh_minus_signing_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/ssh_minus_signing_minus_key";

export async function test_api_user_ssh_signing_keys_get(
  connection: api.IConnection,
) {
  const output: ssh_minus_signing_minus_key[] =
    await api.functional.user.ssh_signing_keys.get(connection);
  typia.assert(output);
}
