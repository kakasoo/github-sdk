import api from "@kakasoo/github-sdk";
import { dependabot_minus_secret } from "@kakasoo/github-sdk/lib/structures/dependabot_minus_secret";
import typia from "typia";

export async function test_api_repos_dependabot_secrets_getByOwnerAndRepoAndSecret_name(
  connection: api.IConnection,
) {
  const output: dependabot_minus_secret =
    await api.functional.repos.dependabot.secrets.getByOwnerAndRepoAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
