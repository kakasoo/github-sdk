import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { empty_minus_object } from "@kakasoo/github-sdk/lib/structures/empty_minus_object";
import typia from "typia";

export async function test_api_repos_codespaces_secrets_putByOwnerAndRepoAndSecret_name(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.repos.codespaces.secrets.putByOwnerAndRepoAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
