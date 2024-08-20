import api from "@kakasoo/github-sdk";
import { IApiSearchCommits } from "@kakasoo/github-sdk/lib/structures/IApiSearchCommits";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_search_commits_get(connection: api.IConnection) {
  const output: response = await api.functional.search.commits.get(
    connection,
    typia.random<IApiSearchCommits.GetQuery>(),
  );
  typia.assert(output);
}
