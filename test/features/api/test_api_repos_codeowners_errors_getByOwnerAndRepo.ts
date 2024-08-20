import api from "@kakasoo/github-sdk";
import { IApiReposCodeownersErrors } from "@kakasoo/github-sdk/lib/structures/IApiReposCodeownersErrors";
import { codeowners_minus_errors } from "@kakasoo/github-sdk/lib/structures/codeowners_minus_errors";
import typia from "typia";

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
