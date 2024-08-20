import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { merged_minus_upstream } from "@kakasoo/github-sdk/lib/structures/merged_minus_upstream";
import typia from "typia";

export async function test_api_repos_merge_upstream_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: merged_minus_upstream =
    await api.functional.repos.merge_upstream.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
