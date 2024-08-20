import api from "@kakasoo/github-sdk";
import { tag } from "@kakasoo/github-sdk/lib/structures/tag";
import typia from "typia";

export async function test_api_repos_tags_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: tag[] = await api.functional.repos.tags.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
