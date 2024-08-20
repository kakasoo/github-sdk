import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_codeql_minus_database } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_codeql_minus_database";
import typia from "typia";

export async function test_api_repos_code_scanning_codeql_databases_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_codeql_minus_database[] =
    await api.functional.repos.code_scanning.codeql.databases.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
