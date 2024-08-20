import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { tag_minus_protection } from "@kakasoo/github-sdk/lib/structures/tag_minus_protection";
import typia from "typia";

export async function test_api_repos_tags_protection_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: tag_minus_protection =
    await api.functional.repos.tags.protection.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
