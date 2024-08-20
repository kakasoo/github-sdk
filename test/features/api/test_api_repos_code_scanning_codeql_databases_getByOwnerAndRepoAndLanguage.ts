import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { code_minus_scanning_minus_codeql_minus_database } from "@ORGANIZATION/PROJECT-api/lib/structures/code_minus_scanning_minus_codeql_minus_database";

export async function test_api_repos_code_scanning_codeql_databases_getByOwnerAndRepoAndLanguage(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_codeql_minus_database =
    await api.functional.repos.code_scanning.codeql.databases.getByOwnerAndRepoAndLanguage(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
