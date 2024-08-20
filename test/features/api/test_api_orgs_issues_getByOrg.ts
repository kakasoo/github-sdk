import api from "@kakasoo/github-sdk";
import { IApiOrgsIssues } from "@kakasoo/github-sdk/lib/structures/IApiOrgsIssues";
import { issue } from "@kakasoo/github-sdk/lib/structures/issue";
import typia from "typia";

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
