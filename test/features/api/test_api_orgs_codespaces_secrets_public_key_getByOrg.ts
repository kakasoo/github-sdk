import api from "@kakasoo/github-sdk";
import { codespaces_minus_public_minus_key } from "@kakasoo/github-sdk/lib/structures/codespaces_minus_public_minus_key";
import typia from "typia";

export async function test_api_orgs_codespaces_secrets_public_key_getByOrg(
  connection: api.IConnection,
) {
  const output: codespaces_minus_public_minus_key =
    await api.functional.orgs.codespaces.secrets.public_key.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
