import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { topic } from "@ORGANIZATION/PROJECT-api/lib/structures/topic";
import { body } from "@ORGANIZATION/PROJECT-api/lib/structures/body";

export async function test_api_repos_topics_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: topic = await api.functional.repos.topics.putByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
