import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { issue } from "@ORGANIZATION/PROJECT-api/lib/structures/issue";
import { IApiOrgsIssues } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiOrgsIssues";

export async function test_api_orgs_issues_getByOrg(
  connection: api.IConnection,
) {
  const output: issue[] = await api.functional.orgs.issues.getByOrg(
    connection,
    typia.random<string>(),
    typia.random<IApiOrgsIssues.GetQuery>(),
  );
  typia.assert(output);
}
