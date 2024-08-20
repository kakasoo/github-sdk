import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { topic } from "@kakasoo/github-sdk/lib/structures/topic";
import typia from "typia";

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
