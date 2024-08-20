import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_user_codespaces_secrets_repositories_putBySecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.user.codespaces.secrets.repositories.putBySecret_name(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
