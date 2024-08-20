import api from "@kakasoo/github-sdk";
import { pages_minus_health_minus_check } from "@kakasoo/github-sdk/lib/structures/pages_minus_health_minus_check";
import typia from "typia";

export async function test_api_repos_pages_health_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: pages_minus_health_minus_check =
    await api.functional.repos.pages.health.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
