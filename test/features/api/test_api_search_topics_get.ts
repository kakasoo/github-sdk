import api from "@kakasoo/github-sdk";
import { IApiSearchTopics } from "@kakasoo/github-sdk/lib/structures/IApiSearchTopics";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_search_topics_get(connection: api.IConnection) {
  const output: response = await api.functional.search.topics.get(
    connection,
    typia.random<IApiSearchTopics.GetQuery>(),
  );
  typia.assert(output);
}
