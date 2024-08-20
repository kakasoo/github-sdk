import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { codeowners_minus_errors } from "@ORGANIZATION/PROJECT-api/lib/structures/codeowners_minus_errors";
import { IApiReposCodeownersErrors } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCodeownersErrors";

export async function test_api_repos_codeowners_errors_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: codeowners_minus_errors =
    await api.functional.repos.codeowners.errors.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCodeownersErrors.GetQuery>(),
    );
  typia.assert(output);
}
