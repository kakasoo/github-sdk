import api from "@kakasoo/github-sdk";
import { IApiSearchIssues } from "@kakasoo/github-sdk/lib/structures/IApiSearchIssues";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_search_issues_get(connection: api.IConnection) {
  const output: response = await api.functional.search.issues.get(
    connection,
    typia.random<IApiSearchIssues.GetQuery>(),
  );
  typia.assert(output);
}
