import api from "@kakasoo/github-sdk";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_user_codespaces_secrets_repositories_getBySecret_name(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.user.codespaces.secrets.repositories.getBySecret_name(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
