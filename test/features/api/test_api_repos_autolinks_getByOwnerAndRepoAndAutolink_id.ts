import api from "@kakasoo/github-sdk";
import { autolink } from "@kakasoo/github-sdk/lib/structures/autolink";
import typia from "typia";

export async function test_api_repos_autolinks_getByOwnerAndRepoAndAutolink_id(
  connection: api.IConnection,
) {
  const output: autolink =
    await api.functional.repos.autolinks.getByOwnerAndRepoAndAutolink_id(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
