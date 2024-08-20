import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { actions_minus_secret } from "@ORGANIZATION/PROJECT-api/lib/structures/actions_minus_secret";

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
