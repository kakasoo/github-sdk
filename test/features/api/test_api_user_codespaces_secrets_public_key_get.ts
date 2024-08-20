import api from "@kakasoo/github-sdk";
import { codespaces_minus_user_minus_public_minus_key } from "@kakasoo/github-sdk/lib/structures/codespaces_minus_user_minus_public_minus_key";
import typia from "typia";

export async function test_api_user_codespaces_secrets_public_key_get(
  connection: api.IConnection,
) {
  const output: codespaces_minus_user_minus_public_minus_key =
    await api.functional.user.codespaces.secrets.public_key.get(connection);
  typia.assert(output);
}
