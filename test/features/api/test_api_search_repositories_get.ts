import api from "@kakasoo/github-sdk";
import { IApiSearchRepositories } from "@kakasoo/github-sdk/lib/structures/IApiSearchRepositories";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_search_repositories_get(
  connection: api.IConnection,
) {
  const output: response = await api.functional.search.repositories.get(
    connection,
    typia.random<IApiSearchRepositories.GetQuery>(),
  );
  typia.assert(output);
}
