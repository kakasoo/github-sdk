import api from "@kakasoo/github-sdk";
import { codespaces_minus_secret } from "@kakasoo/github-sdk/lib/structures/codespaces_minus_secret";
import typia from "typia";

export async function test_api_user_codespaces_secrets_getBySecret_name(
  connection: api.IConnection,
) {
  const output: codespaces_minus_secret =
    await api.functional.user.codespaces.secrets.getBySecret_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
