import api from "@kakasoo/github-sdk";
import { topic } from "@kakasoo/github-sdk/lib/structures/topic";
import typia from "typia";

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
