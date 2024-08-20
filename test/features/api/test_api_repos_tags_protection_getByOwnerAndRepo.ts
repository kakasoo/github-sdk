import api from "@kakasoo/github-sdk";
import { tag_minus_protection } from "@kakasoo/github-sdk/lib/structures/tag_minus_protection";
import typia from "typia";

export async function test_api_repos_tags_protection_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: tag_minus_protection[] =
    await api.functional.repos.tags.protection.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
