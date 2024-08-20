import api from "@kakasoo/github-sdk";
import { codespaces_minus_public_minus_key } from "@kakasoo/github-sdk/lib/structures/codespaces_minus_public_minus_key";
import typia from "typia";

export async function test_api_repos_codespaces_secrets_public_key_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: codespaces_minus_public_minus_key =
    await api.functional.repos.codespaces.secrets.public_key.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
