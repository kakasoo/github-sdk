import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiReposCodespacesNew } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCodespacesNew";

export async function test_api_repos_codespaces__new_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.codespaces._new.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCodespacesNew.GetQuery>(),
    );
  typia.assert(output);
}
