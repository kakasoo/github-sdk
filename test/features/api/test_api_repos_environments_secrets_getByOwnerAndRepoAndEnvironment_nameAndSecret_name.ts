import api from "@kakasoo/github-sdk";
import { actions_minus_secret } from "@kakasoo/github-sdk/lib/structures/actions_minus_secret";
import typia from "typia";

export async function test_api_repos_environments_secrets_getByOwnerAndRepoAndEnvironment_nameAndSecret_name(
  connection: api.IConnection,
) {
  const output: actions_minus_secret =
    await api.functional.repos.environments.secrets.getByOwnerAndRepoAndEnvironment_nameAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
