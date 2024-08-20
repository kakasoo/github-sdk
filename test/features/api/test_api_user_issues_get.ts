import api from "@kakasoo/github-sdk";
import { IApiUserIssues } from "@kakasoo/github-sdk/lib/structures/IApiUserIssues";
import { issue } from "@kakasoo/github-sdk/lib/structures/issue";
import typia from "typia";

export async function test_api_user_issues_get(connection: api.IConnection) {
  const output: issue[] = await api.functional.user.issues.get(
    connection,
    typia.random<IApiUserIssues.GetQuery>(),
  );
  typia.assert(output);
}
