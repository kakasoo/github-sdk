import api from "@kakasoo/github-sdk";
import { IApiIssues } from "@kakasoo/github-sdk/lib/structures/IApiIssues";
import { issue } from "@kakasoo/github-sdk/lib/structures/issue";
import typia from "typia";

export async function test_api_issues_get(connection: api.IConnection) {
  const output: issue[] = await api.functional.issues.get(
    connection,
    typia.random<IApiIssues.GetQuery>(),
  );
  typia.assert(output);
}
