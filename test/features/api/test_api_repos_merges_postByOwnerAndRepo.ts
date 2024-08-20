import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { commit } from "@kakasoo/github-sdk/lib/structures/commit";
import typia from "typia";

export async function test_api_repos_merges_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: commit = await api.functional.repos.merges.postByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
