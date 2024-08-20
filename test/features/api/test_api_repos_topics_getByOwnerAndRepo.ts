import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { topic } from "@ORGANIZATION/PROJECT-api/lib/structures/topic";

export async function test_api_repos_topics_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: topic = await api.functional.repos.topics.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
