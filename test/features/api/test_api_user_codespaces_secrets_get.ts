import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_user_codespaces_secrets_get(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.codespaces.secrets.get(connection);
  typia.assert(output);
}
