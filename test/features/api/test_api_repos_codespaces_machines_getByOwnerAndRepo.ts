import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiReposCodespacesMachines } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiReposCodespacesMachines";

export async function test_api_repos_codespaces_machines_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: response =
    await api.functional.repos.codespaces.machines.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<IApiReposCodespacesMachines.GetQuery>(),
    );
  typia.assert(output);
}
