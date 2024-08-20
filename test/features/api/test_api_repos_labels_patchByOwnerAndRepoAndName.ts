import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { label } from "@kakasoo/github-sdk/lib/structures/label";
import typia from "typia";

export async function test_api_repos_labels_patchByOwnerAndRepoAndName(
  connection: api.IConnection,
) {
  const output: label =
    await api.functional.repos.labels.patchByOwnerAndRepoAndName(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
