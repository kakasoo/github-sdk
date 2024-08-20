import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { response } from "@ORGANIZATION/PROJECT-api/lib/structures/response";
import { IApiSearchTopics } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiSearchTopics";

export async function test_api_search_topics_get(connection: api.IConnection) {
  const output: response = await api.functional.search.topics.get(
    connection,
    typia.random<IApiSearchTopics.GetQuery>(),
  );
  typia.assert(output);
}
