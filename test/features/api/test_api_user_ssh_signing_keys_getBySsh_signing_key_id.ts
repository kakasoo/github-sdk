import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { ssh_minus_signing_minus_key } from "@ORGANIZATION/PROJECT-api/lib/structures/ssh_minus_signing_minus_key";

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
