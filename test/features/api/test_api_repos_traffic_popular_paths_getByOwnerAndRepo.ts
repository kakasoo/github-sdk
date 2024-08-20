import api from "@kakasoo/github-sdk";
import { content_minus_traffic } from "@kakasoo/github-sdk/lib/structures/content_minus_traffic";
import typia from "typia";

export async function test_api_repos_traffic_popular_paths_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: content_minus_traffic[] =
    await api.functional.repos.traffic.popular.paths.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
