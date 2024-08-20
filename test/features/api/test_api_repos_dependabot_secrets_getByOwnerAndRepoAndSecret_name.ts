import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { dependabot_minus_secret } from "@ORGANIZATION/PROJECT-api/lib/structures/dependabot_minus_secret";

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
