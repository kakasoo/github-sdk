import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { repo_minus_codespaces_minus_secret } from "@ORGANIZATION/PROJECT-api/lib/structures/repo_minus_codespaces_minus_secret";

export async function test_api_repos_codespaces_secrets_getByOwnerAndRepoAndSecret_name(
  connection: api.IConnection,
) {
  const output: repo_minus_codespaces_minus_secret =
    await api.functional.repos.codespaces.secrets.getByOwnerAndRepoAndSecret_name(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
