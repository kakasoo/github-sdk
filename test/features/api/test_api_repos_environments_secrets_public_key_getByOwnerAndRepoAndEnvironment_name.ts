import api from "@kakasoo/github-sdk";
import { actions_minus_public_minus_key } from "@kakasoo/github-sdk/lib/structures/actions_minus_public_minus_key";
import typia from "typia";

export async function test_api_repos_environments_secrets_public_key_getByOwnerAndRepoAndEnvironment_name(
  connection: api.IConnection,
) {
  const output: actions_minus_public_minus_key =
    await api.functional.repos.environments.secrets.public_key.getByOwnerAndRepoAndEnvironment_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
