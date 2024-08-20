import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiSearchRepositories } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiSearchRepositories";

export async function test_api_search_repositories_get(
  connection: api.IConnection,
) {
  const output: response = await api.functional.search.repositories.get(
    connection,
    typia.random<IApiSearchRepositories.GetQuery>(),
  );
  typia.assert(output);
}
