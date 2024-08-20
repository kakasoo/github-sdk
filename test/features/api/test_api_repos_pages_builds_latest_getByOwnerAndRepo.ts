import api from "@kakasoo/github-sdk";
import { page_minus_build } from "@kakasoo/github-sdk/lib/structures/page_minus_build";
import typia from "typia";

export async function test_api_repos_pages_builds_latest_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: page_minus_build =
    await api.functional.repos.pages.builds.latest.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
