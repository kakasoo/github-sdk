import api from "@kakasoo/github-sdk";
import { IApiReposCodespacesNew } from "@kakasoo/github-sdk/lib/structures/IApiReposCodespacesNew";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

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
