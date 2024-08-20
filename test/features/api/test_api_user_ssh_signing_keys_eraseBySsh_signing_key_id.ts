import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_user_ssh_signing_keys_eraseBySsh_signing_key_id(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.ssh_signing_keys.eraseBySsh_signing_key_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
