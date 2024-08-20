import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue } from "@ORGANIZATION/PROJECT-api/lib/structures/issue";
import { IApiUserIssues } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiUserIssues";

export async function test_api_user_issues_get(connection: api.IConnection) {
  const output: issue[] = await api.functional.user.issues.get(
    connection,
    typia.random<IApiUserIssues.GetQuery>(),
  );
  typia.assert(output);
}
