import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue } from "@ORGANIZATION/PROJECT-api/lib/structures/issue";
import { IApiIssues } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiIssues";

export async function test_api_issues_get(connection: api.IConnection) {
  const output: issue[] = await api.functional.issues.get(
    connection,
    typia.random<IApiIssues.GetQuery>(),
  );
  typia.assert(output);
}
