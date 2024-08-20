import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiSearchCommits } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiSearchCommits";

export async function test_api_search_commits_get(connection: api.IConnection) {
  const output: response = await api.functional.search.commits.get(
    connection,
    typia.random<IApiSearchCommits.GetQuery>(),
  );
  typia.assert(output);
}
