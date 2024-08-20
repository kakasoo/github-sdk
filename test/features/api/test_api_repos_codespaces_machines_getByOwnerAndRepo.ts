import api from "@kakasoo/github-sdk";
import { IApiReposCodespacesMachines } from "@kakasoo/github-sdk/lib/structures/IApiReposCodespacesMachines";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
