import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { full_minus_repository } from "@kakasoo/github-sdk/lib/structures/full_minus_repository";
import typia from "typia";

export async function test_api_repos_patchByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: full_minus_repository =
    await api.functional.repos.patchByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
