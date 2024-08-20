import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiSearchIssues } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiSearchIssues";

export async function test_api_search_issues_get(connection: api.IConnection) {
  const output: response = await api.functional.search.issues.get(
    connection,
    typia.random<IApiSearchIssues.GetQuery>(),
  );
  typia.assert(output);
}
