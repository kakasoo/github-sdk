import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_dependabot_secrets_eraseByOwnerAndRepoAndSecret_name(
  connection: api.IConnection,
) {
  const output =
    await api.functional.repos.dependabot.secrets.eraseByOwnerAndRepoAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
